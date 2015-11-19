package org.hl7.fhir.instance.utils;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.Collections;
import java.util.HashMap;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.zip.ZipEntry;
import java.util.zip.ZipInputStream;

import org.hl7.fhir.instance.formats.IParser;
import org.hl7.fhir.instance.formats.JsonParser;
import org.hl7.fhir.instance.formats.ParserType;
import org.hl7.fhir.instance.formats.XmlParser;
import org.hl7.fhir.instance.model.BooleanType;
import org.hl7.fhir.instance.model.Bundle;
import org.hl7.fhir.instance.model.Bundle.BundleEntryComponent;
import org.hl7.fhir.instance.model.CodeableConcept;
import org.hl7.fhir.instance.model.Coding;
import org.hl7.fhir.instance.model.ConceptMap;
import org.hl7.fhir.instance.model.Conformance;
import org.hl7.fhir.instance.model.DataElement;
import org.hl7.fhir.instance.model.ElementDefinition.ElementDefinitionBindingComponent;
import org.hl7.fhir.instance.model.Extension;
import org.hl7.fhir.instance.model.OperationOutcome.IssueSeverity;
import org.hl7.fhir.instance.model.Parameters;
import org.hl7.fhir.instance.model.Parameters.ParametersParameterComponent;
import org.hl7.fhir.instance.model.Reference;
import org.hl7.fhir.instance.model.Resource;
import org.hl7.fhir.instance.model.SearchParameter;
import org.hl7.fhir.instance.model.StringType;
import org.hl7.fhir.instance.model.StructureDefinition;
import org.hl7.fhir.instance.model.StructureDefinition.StructureDefinitionKind;
import org.hl7.fhir.instance.model.UriType;
import org.hl7.fhir.instance.model.ValueSet;
import org.hl7.fhir.instance.model.ValueSet.ConceptDefinitionComponent;
import org.hl7.fhir.instance.model.ValueSet.ConceptDefinitionDesignationComponent;
import org.hl7.fhir.instance.model.ValueSet.ConceptSetComponent;
import org.hl7.fhir.instance.model.ValueSet.ValueSetComposeComponent;
import org.hl7.fhir.instance.model.ValueSet.ValueSetExpansionComponent;
import org.hl7.fhir.instance.model.ValueSet.ValueSetExpansionContainsComponent;
import org.hl7.fhir.instance.terminologies.ValueSetExpanderFactory;
import org.hl7.fhir.instance.terminologies.ValueSetExpansionCache;
import org.hl7.fhir.instance.terminologies.ValueSetExpander.ValueSetExpansionOutcome;
import org.hl7.fhir.instance.utils.ProfileUtilities.ProfileKnowledgeProvider;
import org.hl7.fhir.instance.utils.client.FHIRToolingClient;
import org.hl7.fhir.instance.validation.IResourceValidator;
import org.hl7.fhir.instance.validation.InstanceValidator;
import org.hl7.fhir.instance.validation.ValidationMessage;
import org.hl7.fhir.utilities.CSFileInputStream;
import org.hl7.fhir.utilities.CommaSeparatedStringBuilder;
import org.hl7.fhir.utilities.Utilities;

/*
 * This is a stand alone implementation of worker context for use inside a tool.
 * It loads from the validation package (validation-min.xml.zip), and has a 
 * very light cient to connect to an open unauthenticated terminology service
 */

public class SimpleWorkerContext extends BaseWorkerContext implements IWorkerContext, ProfileKnowledgeProvider {

	// all maps are to the full URI
	private Map<String, StructureDefinition> structures = new HashMap<String, StructureDefinition>();

	// -- Initializations
	/**
	 * Load the working context from the validation pack
	 * 
	 * @param path
	 *           filename of the validation pack
	 * @return
	 * @throws Exception
	 */
	public static SimpleWorkerContext fromPack(String path) throws Exception {
		SimpleWorkerContext res = new SimpleWorkerContext();
		res.loadFromPack(path);
		return res;
	}

	public static SimpleWorkerContext fromClassPath() throws Exception {
		SimpleWorkerContext res = new SimpleWorkerContext();
		res.loadFromStream(SimpleWorkerContext.class.getResourceAsStream("validation.zip"));
		return res;
	}

	public static SimpleWorkerContext fromDefinitions(Map<String, byte[]> source) throws Exception {
		SimpleWorkerContext res = new SimpleWorkerContext();
		for (String name : source.keySet()) {
			if (name.endsWith(".xml")) {
				res.loadFromFile(new ByteArrayInputStream(source.get(name)), name);
			}
		}
		return res;
	}

	public void connectToTSServer(String url) throws URISyntaxException {
	  txServer = new FHIRToolingClient(url);
	}

	private void loadFromFile(InputStream stream, String name) throws Exception {
		XmlParser xml = new XmlParser();
		Bundle f = (Bundle) xml.parse(stream);
		for (BundleEntryComponent e : f.getEntry()) {

			if (e.getFullUrl() == null) {
				System.out.println("unidentified resource in " + name+" (no fullUrl)");
			}
			seeResource(e.getFullUrl(), e.getResource());
		}
	}

	public void seeResource(String url, Resource r) throws Exception {
    if (r instanceof StructureDefinition)
      seeProfile(url, (StructureDefinition) r);
    else if (r instanceof ValueSet)
      seeValueSet(url, (ValueSet) r);
    else if (r instanceof ConceptMap)
      maps.put(((ConceptMap) r).getUrl(), (ConceptMap) r);
	}
	
	private void seeValueSet(String url, ValueSet vs) throws Exception {
	  if (Utilities.noString(url))
	    url = vs.getUrl();
		if (valueSets.containsKey(vs.getUrl()))
			throw new Exception("Duplicate Profile " + vs.getUrl());
		valueSets.put(vs.getId(), vs);
		valueSets.put(vs.getUrl(), vs);
		if (!vs.getUrl().equals(url))
			valueSets.put(url, vs);
		if (vs.hasCodeSystem()) {
			codeSystems.put(vs.getCodeSystem().getSystem().toString(), vs);
		}
	}

	private void seeProfile(String url, StructureDefinition p) throws Exception {
    if (Utilities.noString(url))
      url = p.getUrl();
    if (!p.hasSnapshot()) {
      if (!p.hasBase())
        throw new Exception("Profile "+p.getName()+" ("+p.getUrl()+") has no base and no snapshot");
      StructureDefinition sd = fetchResource(StructureDefinition.class, p.getBase());
      if (sd == null)
        throw new Exception("Profile "+p.getName()+" ("+p.getUrl()+") base "+p.getBase()+" could not be resolved");
      ProfileUtilities pu = new ProfileUtilities(this);
      List<ValidationMessage> msgs = new ArrayList<ValidationMessage>();
      pu.generateSnapshot(sd, p, p.getUrl(), p.getName(), this, msgs);
      for (ValidationMessage msg : msgs) {
        if (msg.getLevel() == IssueSeverity.ERROR || msg.getLevel() == IssueSeverity.FATAL)
          throw new Exception("Profile "+p.getName()+" ("+p.getUrl()+"). Error generating: "+msg.getMessage());
      }
      pu = null;
    }
		if (structures.containsKey(p.getUrl()))
			throw new Exception("Duplicate structures " + p.getUrl());
		structures.put(p.getId(), p);
		structures.put(p.getUrl(), p);
		if (!p.getUrl().equals(url))
			structures.put(url, p);
	}

	private void loadFromPack(String path) throws Exception {
		loadFromStream(new CSFileInputStream(path));
	}

	private void loadFromStream(InputStream stream) throws Exception {
		ZipInputStream zip = new ZipInputStream(stream);
		ZipEntry ze;
		while ((ze = zip.getNextEntry()) != null) {
			if (ze.getName().endsWith(".xml")) {
				String name = ze.getName();
				loadFromFile(zip, name);
			}
			zip.closeEntry();
		}
		zip.close();
	}


	@Override
	public IParser getParser(ParserType type) {
		switch (type) {
		case JSON: return newJsonParser();
		case XML: return newXmlParser();
		default:
			throw new Error("Parser Type "+type.toString()+" not supported");
		}
	}

	@Override
	public IParser getParser(String type) {
		if (type.equalsIgnoreCase("JSON"))
			return new JsonParser();
		if (type.equalsIgnoreCase("XML"))
			return new XmlParser();
		throw new Error("Parser Type "+type.toString()+" not supported");
	}

	@Override
	public IParser newJsonParser() {
		return new JsonParser();
	}
	@Override
	public IParser newXmlParser() {
		return new XmlParser();
	}

	@Override
	public <T extends Resource> boolean hasResource(Class<T> class_, String uri) {
		try {
			return fetchResource(class_, uri) != null;
		} catch (Exception e) {
			return false;
		}
	}

	@Override
	public INarrativeGenerator getNarrativeGenerator(String prefix, String basePath) {
		return new NarrativeGenerator(prefix, basePath, this);
	}

	@Override
	public IResourceValidator newValidator() throws Exception {
		return new InstanceValidator(this);
	}

	@SuppressWarnings("unchecked")
	@Override
	public <T extends Resource> T fetchResource(Class<T> class_, String uri) throws EOperationOutcome, Exception {
		if (class_ == StructureDefinition.class && !uri.contains("/"))
			uri = "http://hl7.org/fhir/StructureDefinition/"+uri;

		if (uri.startsWith("http:")) {
			if (uri.contains("#"))
				uri = uri.substring(0, uri.indexOf("#"));
			if (class_ == StructureDefinition.class) {
				if (structures.containsKey(uri))
					return (T) structures.get(uri);
				else
					return null;
			} else if (class_ == ValueSet.class) {
				if (valueSets.containsKey(uri))
					return (T) valueSets.get(uri);
				else if (codeSystems.containsKey(uri))
					return (T) codeSystems.get(uri);
				else
					return null;      
			}
		}
		if (class_ == null && uri.contains("/")) {
			return null;      
		}

		throw new Error("not done yet");
	}



	public int totalCount() {
		return valueSets.size() +  maps.size() + structures.size();
	}

	public void setCache(ValueSetExpansionCache cache) {
	  this.expansionCache = cache;	
	}

  @Override
  public List<String> getResourceNames() {
    List<String> result = new ArrayList<String>();
    for (StructureDefinition sd : structures.values()) {
      if (sd.getKind() == StructureDefinitionKind.RESOURCE && !sd.hasConstrainedType())
        result.add(sd.getName());
    }
    Collections.sort(result);
    return result;
  }

  @Override
  public String getAbbreviation(String name) {
    return "xxx";
  }

  @Override
  public boolean isDatatype(String typeSimple) {
    // TODO Auto-generated method stub
    return false;
  }

  @Override
  public boolean isResource(String t) {
    StructureDefinition sd;
    try {
      sd = fetchResource(StructureDefinition.class, "http://hl7.org/fhir/StructureDefinition/"+t);
    } catch (Exception e) {
      return false;
    }
    if (sd == null)
      return false;
    if (sd.hasConstrainedType())
      return false;
    return sd.getKind() == StructureDefinitionKind.RESOURCE;
  }

  @Override
  public boolean hasLinkFor(String typeSimple) {
    return false;
  }

  @Override
  public String getLinkFor(String typeSimple) throws Exception {
    return null;
  }

  @Override
  public BindingResolution resolveBinding(ElementDefinitionBindingComponent binding) {
    return null;
  }

  @Override
  public String getLinkForProfile(StructureDefinition profile, String url) throws Exception {
    return null;
  }



}
