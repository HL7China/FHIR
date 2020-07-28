//规则：pId为父级id，zNodes里面的数据，pId为0时为第一层  children为子集
//iconSkin属性控制图标，icon01是正式规范  pIcon01是非正式规范    open是否展开  url链接地址   target用于设置 页面跳转的窗口目标:_self当前窗口  _blank新窗口  subtitle副标题 thickTitle粗标题 fineTitle细标题
var zNodes =[
    { id:1, pId:0, name:" 1 Welcome to FHIR® ",fineTitle:"",thickTitle:"欢迎使用 FHIR®", subtitle:"（部分资源重复，如：ImagingStudy）", open:false, iconSkin:"pIcon01",url:"index.html", target:"_self",
        children: [
            {
                id: 10, name: " 1.0 Table Of Contents", fineTitle: "原始目录", iconSkin: "pIcon01",
                url: "toc_bak.html", subtitle: "（某些目录缺失，编号不正确。删除了成熟度描述，以图标颜色为准：因部分内容不符，如将Informative写成Trial Use）", target: "_blank"
            },

            { id: 11, name: " 1.1 Documentation Index", fineTitle: "文档索引", iconSkin: "pIcon01", url:"documentation.html", target:"_blank"},
            {id:12, name:" 1.2 Resource Index",fineTitle:"",thickTitle:"资源索引",iconSkin:"pIcon01",url:"resourcelist.html",subtitle:"（修正Architect's Overview链接为：overview-arch.html#frameworks）", target:"_blank"},
            {id:13, name:" 1.3 Profiles defined as part of FHIR",fineTitle:"FHIR内置的配置",iconSkin:"pIcon01",url:"profilelist.html",target:"_blank"},
            {id:14, name:" 1.4 FHIR Core-defined Extension Registry",fineTitle:"FHIR核心扩展注册表",iconSkin:"pIcon01",url:"extensibility-registry.html",target:"_blank"},
            {id: 15, name: " 1.5 Defined RESTful API Operations ", fineTitle:"",thickTitle: "已定义的 RESTful API 操作", subtitle:"($conforms操作解释错误、重复;test operations & apply两处重复;Fetch Preferred it应为id)",iconSkin:"pIcon01",url:"operationslist.html",target:"_blank"},
            {id:16, name:" 1.7 Namespaces defined by FHIR",iconSkin:"pIcon01",url:"ns.html",target:"_blank"},
			{id:17, name:" 1.8 FHIR Workgroup List Report",iconSkin:"pIcon01",url:"wglist.html",target:"_blank"},
            { id: 18, name: " 1.9 Getting Started with FHIR", fineTitle:"",thickTitle: "开始使用FHIR", subtitle:"（去掉STU3版本的Linked Data组件)",iiconSkin:"pIcon01",url:"modules.html",target:"_blank"},
			
        ]},
    { id:2, pId:0, name:" 2 Foundation Module", fineTitle:"",thickTitle:"基础组件", open:false,iconSkin:"pIcon01",url:"foundation-module.html", target:"_self",
        children: [
            { id: 20, name: " 2.0 Documentation", iconSkin: "pIcon01",  fineTitle:"文档索引",url: "documentation.html", target: "_blank" },
			{id:21, name:" 2.1 Conformance",fineTitle:"标准符合性",iconSkin:"icon01",url:"conformance-rules.html",target:"_blank"},
			{id:22, name:" 2.2 FHIR Life Cycle Page",iconSkin:"pIcon01",url:"lifecycle.html",target:"_blank"},
			{id:23, name:" 2.3 Resource References",iconSkin:"icon01",url:"references.html",target:"_blank"},
			{id:24, name:" 2.4 Narrative",iconSkin:"icon01",url:"narrative.html",target:"_blank"},
			{id:25, name:" 2.5 Extensibility",iconSkin:"icon01",url:"extensibility.html",target:"_blank"},
			{id:26, name:" 2.6 Resource Formats",iconSkin:"icon01",url:"formats.html",target:"_blank"},
			{id:27, name:" 2.7 Version Management Policy",iconSkin:"icon01",url:"versions.html",target:"_blank"},
			{id:28, name:" 2.8 Managing Multiple FHIR Versions",iconSkin:"pIcon01",url:"versioning.html",target:"_blank"},
			{id:29, name:" 2.9 FHIRPath",iconSkin:"pIcon01",url:"fhirpath.html",target:"_blank"},
			{id:210, name:" 2.10 Version History since DSTU #1",iconSkin:"pIcon01",url:"history.html",target:"_blank"},
            {
                id: 211, name: " 2.11 Differences from Release 3", findTitle: "与第3版的区别",
                subtitle: "(导航条为DSTU2,应为R3)", iconSkin: "pIcon01", url: "diff.html", target: "_blank"
            },
			{id:212, name:" 2.12 Transforms between DSTU 3 and STU 4",iconSkin:"pIcon01",url:"r3maps.html",target:"_blank"},
			{id:213, name:" 2.13 FHIR Overview",iconSkin:"pIcon01",url:"overview.html",target:"_blank"},
			{id:214, name:" 2.14 FHIR Overview - Developers",iconSkin:"pIcon01",url:"overview-dev.html",target:"_blank"},
			{id:215, name:" 2.15 FHIR Overview - Clinicians",iconSkin:"pIcon01",url:"overview-clinical.html",target:"_blank"},
            { id: 216, name: " 2.16 FHIR Overview - Architects", fineTitle: "FHIR概述-写给架构师", subtitle: "(2.16.5 FHIR框架结构子类更新)",iconSkin:"pIcon01",url:"overview-arch.html",target:"_blank"},
            { id: 217, name: " 2.17 Introducing HL7 FHIR ", fineTitle:"",thickTitle: "HL7 FHIR 简介", subtitle: "(补充：在2.17.4里加入已发布正式版信息)",iconSkin:"pIcon01",url:"summary.html",target:"_blank"},
			{id:218, name:" 2.18 Glossary",iconSkin:"pIcon01",url:"help.html",target:"_blank"},
			{id:219, name:" 2.19 Language Glossary",iconSkin:"pIcon01",url:"glossary.html",target:"_blank"},
			{id:220, name:" 2.20 License and Legal Terms",iconSkin:"pIcon01",url:"license.html",target:"_blank"},
			{id:221, name:" 2.21 Community and Credits",iconSkin:"pIcon01",url:"credits.html",target:"_blank"},
            {
                id: 222, name: " 2.22 Outstanding Issues", findTitle: "待解决的问题",
                subtitle: "(third round of trial use,应为1st Normative Content + Trial Use Developments)", iconSkin:"pIcon01",url:"todo.html",target:"_blank"},
			{id:223, name:" 2.23 Appendix: The Role of Informatics in the Shift from Reactive to Proactive Healthcare",iconSkin:"pIcon01",url:"change.html",target:"_blank"},
			{id:224, name:" 2.24 Data Types",iconSkin:"icon01",url:"datatypes.html",target:"_blank"},
			{id:225, name:" 2.25 MetaData Types",iconSkin:"icon01",url:"metadatatypes.html",target:"_blank"},
			{id:226, name:" 2.26 Base Resource Definitions",iconSkin:"icon01",url:"resource.html",target:"_blank",
				children:[
					{id:2261, name:"2.26.6 Resource Resource - Operations",iconSkin:"pIcon01",url:"resource-operations.html",target:"_blank",
						children:[
                            {
                                id: 22611, name: " 2.26.6.1 Operation $validate on Resource", fineTitle:"",thickTitle: "资源的验证操作",subtitle: "(官方定义URL错误)",iconSkin:"icon01",url:"resource-operation-validate.html",target:"_blank"},
                            { id: 22612, name: " 2.26.6.2 Operation $meta on Resource", fineTitle: "获取资源元数据的操作", subtitle: "(多了一个“）”；other meta operations是指什么)",iconSkin:"pIcon01",url:"resource-operation-meta.html",target:"_blank"},
						{id:22613, name:" 2.26.6.3 Operation $meta-add on Resource",fineTitle:"添加资源元数据的操作",iconSkin:"pIcon01",url:"resource-operation-meta-add.html",target:"_blank"},
						{id:22614, name:" 2.26.6.4 Operation $meta-delete on Resource",fineTitle:"删除资源元数据的操作",iconSkin:"pIcon01",url:"resource-operation-meta-delete.html",target:"_blank"},
						
                            { id: 22615, name: " 2.26.6.5 Operation $convert on Resource", fineTitle: "资源的格式转换操作", subtitle: "（e.g.前多了“（”）",iconSkin:"pIcon01",url:"resource-operation-convert.html",target:"_blank"},
                            { id: 22616, name: " 2.26.6.6 Operation $graphql on Resource", fineTitle:"",thickTitle: "资源的GraphQL操作", subtitle: "（since资源应该是single资源）",iconSkin:"pIcon01",url:"resource-operation-graphql.html",target:"_blank"},
                            { id: 22614, name: " 2.26.6.7 Operation $graph on Resource", fineTitle:"",thickTitle: "资源的图谱操作",subtitle: "(packaage笔误)",iconSkin:"pIcon01",url:"resource-operation-graph.html",target:"_blank"},
						]
					},
				]
			
			},
			{id:227, name:" 2.27 DomainResource Resource",iconSkin:"icon01",url:"domainresource.html",target:"_blank"},
			{id:228, name:" 2.28 Element",iconSkin:"icon01",url:"element.html",target:"_blank"},
			{id:229, name:" 2.29 BackboneElement",iconSkin:"icon01",url:"backboneelement.html",target:"_blank"},
			{id:230, name:" 2.30 Element Definition",iconSkin:"icon01",url:"elementdefinition.html",target:"_blank"},
			{id:231, name:" 2.31 Guide to Resources",iconSkin:"pIcon01",url:"resourceguide.html",target:"_blank"},
			{id:233, name:" 2.33 FMG Summary Page",iconSkin:"pIcon01",url:"fmg.html",target:"_blank"},
			{id:234, name:" 2.34 Resource Basic - Content",iconSkin:"pIcon01",url:"basic.html",target:"_blank"},
			{id:235, name:" 2.35 Resource Binary - Content",iconSkin:"pIcon01",url:"binary.html",target:"_blank"},
			{id:236, name:" 2.36 Resource Bundle - Content",iconSkin:"icon01",url:"bundle.html",target:"_blank"},
			{id:237, name:" 2.37 Resource Questionnaire - Content",iconSkin:"pIcon01",url:"questionnaire.html",target:"_blank"},
			{id:238, name:" 2.38 Resource QuestionnaireResponse - Content",iconSkin:"pIcon01",url:"questionnaireresponse.html",target:"_blank"},
			{id:239, name:" 2.39 Resource List - Content",iconSkin:"pIcon01",url:"list.html",target:"_blank",
				children:[
					{id:2391, name:" 2.39.15 Resource List - Operations",iconSkin:"pIcon01",url:"list-operations.html",target:"_blank",
						children:[
							{id:23911, name:" 2.39.15.1 Operation $find on List",iconSkin:"pIcon01",url:"list-operation-find.html",target:"_blank"},
						]
					},
				]
			},
			{id:241, name:" 2.41 Resource Composition - Content",iconSkin:"pIcon01",url:"composition.html",target:"_blank",
				children:[
					{id:2411, name:" 2.41.12 Resource Composition - Operations",iconSkin:"pIcon01",url:"composition-operations.html",target:"_blank",
						children:[
							{id:24111, name:" 2.41.12.1 Operation $document on Composition",iconSkin:"pIcon01",url:"composition-operation-document.html",target:"_blank"},
						]
					},
				]
			},
			{id:242, name:" 2.42 Resource DocumentReference - Content",iconSkin:"pIcon01",url:"documentreference.html",target:"_blank"},
			{id:243, name:" 2.43 Resource DocumentManifest - Content",fineTitle:"文档清单资源简介",iconSkin:"pIcon01",url:"documentmanifest.html",target:"_blank"},
			{id:244, name:" 2.44 Resource OperationOutcome - Content",iconSkin:"icon01",url:"operationoutcome.html",target:"_blank"},
			{id:245, name:" 2.45 Resource Parameters - Content",iconSkin:"icon01",url:"parameters.html",target:"_blank"},
            {id:246, name:" 2.46 Resource Subscription - Content",iconSkin:"pIcon01",url:"subscription.html",target:"_blank"},
			{id:247, name:" 2.47 Resource MessageHeader - Content",iconSkin:"pIcon01",url:"messageheader.html",target:"_blank",
				children:[
					{id:2471, name:" 2.47.9 Resource MessageHeader - Operations",iconSkin:"pIcon01",url:"messageheader-operations.html",target:"_blank",
						children:[
                            {
                                id: 24711, name: " 2.47.9.1 Operation $process-message on MessageHeader",
                                fineTitle: "对消息头的消息处理操作（$process-message）",
                                subtitle: "（<br/>不应转义）", iconSkin: "pIcon01", url: "messageheader-operation-process-message.html", target: "_blank"
                            },
						]
					},
				]
			},
			{id:248, name:" 2.48 Resource MessageDefinition - Content",iconSkin:"pIcon01",url:"messagedefinition.html",target:"_blank"}
			]},
	{ id:3, pId:0, name:" 3 FHIR Exchange Module", open:false,  fineTitle: "FHIR交互组件", subtitle: "（在持久化存储中使用FHIR的超链接缺失）",iconSkin:"pIcon01",url:"exchange-module.html", target:"_self",
        children:[
            { id: 31, name: " 3.1 RESTful API ", fineTitle: "REST风格微服务", subtitle: "（3.1.0.9 “the return”文字重复）",iconSkin:"icon01",url:"http.html", target:"_blank",
                children: [
                    { id: 311, name: " 3.1.1 Search", fineTitle: "搜索", subtitle: "(3.1.1.5.4中“related-target”为STU3的元素，已修正为“hasMember”；3.1.1.2“/Patient/[id]”应为“/[Compartment]/[id]”)", iconSkin: "icon01", url: "search.html", target: "_blank" },
                    { id: 312, name: " 3.1.2 Using GraphQL with FHIR", iconSkin: "pIcon01", url: "graphql.html", target: "_blank" },
                    { id: 313, name: " 3.1.3 _filter Parameter", iconSkin: "pIcon01", url: "search_filter.html", target: "_blank" },
                    { id: 314, name: " 3.1.4 Defined Search Parameters", iconSkin: "pIcon01", url: "searchparameter-registry.html", target: "_blank" },
                    { id: 315, name: " 3.1.5 FHIRPath Patch", iconSkin: "pIcon01", url: "fhirpatch.html", target: "_blank" },
                    { id: 316, name: " 3.1.6 Asynchronous Request Pattern", iconSkin: "pIcon01", url: "async.html", target: "_blank" }
                ] 
            },
            {
                id: 32, name: " 3.2 Extended Operations on the RESTful API", fineTitle: "RESTful API 的扩展操作", subtitle: "（3.2.0.1 “四类FHIR终结点”更正为“三类”）", iconSkin: "icon01", url: "operations.html", target: "_blank",
                children: [
                    { id: 321, name: " 3.2.1 Operation Request Example", iconSkin: "pIcon01", url: "op-example-request.html", target: "_blank" }
                ]
            },
            { id: 33, name: " 3.3 FHIR Documents", iconSkin: "pIcon01", url: "documents.html", target: "_blank" },
            {id:34, name:" 3.4 Messaging using FHIR Resources ",iconSkin:"pIcon01",url:"messaging.html", target:"_blank"},
            {id:35, name:" 3.5 Using Resources with Services and Service-oriented Architecture",iconSkin:"pIcon01",url:"services.html", target:"_blank"},
            {id:36, name:" 3.6 Using FHIR in persistent stores",iconSkin:"pIcon01",url:"storage.html", target:"_blank"},
            {id:37, name:" 3.7 FHIR Status Codes Grid ",iconSkin:"pIcon01",url:"sc.html", target:"_blank"},
            {id:38, name:" 3.8 FHIR W5 Report",iconSkin:"pIcon01",url:"w5.html", target:"_blank"},
        ]},
	{ id:4, pId:0, name:" 4 Terminology Module ",fineTitle:"术语组件", open:false, iconSkin:"pIcon01",url:"terminology-module.html", target:"_self",
        children:[
            {id:41, name:" 4.1 Using Codes in Resources",fineTitle:"在资源中使用编码",iconSkin:"icon01",url:"terminologies.html", target:"_blank"},
            {id:42, name:" 4.2 Terminology Binding Examples",iconSkin:"pIcon01",url:"terminologies-binding-examples.html", target:"_blank"},
            { id: 43, name: " 4.3 Code Systems", fineTitle: "已知编码系统",iconSkin:"pIcon01",url:"terminologies-systems.html", target:"_blank"},
            {id:44, name:" 4.4 Value Sets Defined in FHIR",iconSkin:"pIcon01",url:"terminologies-valuesets.html", target:"_blank"},
            {id:45, name:" 4.5 Mappings between Value Sets Defined in FHIR",iconSkin:"pIcon01",url:"terminologies-conceptmaps.html", target:"_blank"},
            { id: 46, name: " 4.6 Known Identifier Systems", fineTitle: "已知标识系统",iconSkin:"pIcon01",url:"identifier-registry.html", target:"_blank"},
            {id:47, name:" 4.7 Terminology Service",iconSkin:"pIcon01",url:"terminology-service.html", target:"_blank"},
            {id:48, name:" 4.8 Resource CodeSystem - Content",iconSkin:"icon01",url:"codesystem.html", target:"_blank",
				children:[
					 {id:4821, name:" 4.8.21 Resource CodeSystem - Operations",iconSkin:"pIcon01",url:"codesystem-operations.html", target:"_blank",
						children:[
							 {id:48211, name:" 4.8.21.1 Operation $lookup on CodeSystem",fineTitle: "CodeSystem 的查找操作：$lookup",iconSkin:"icon01",url:"codesystem-operation-lookup.html", target:"_blank"},
							 {id:48212, name:" 4.8.21.2 Operation $validate-code on CodeSystem",iconSkin:"icon01",url:"codesystem-operation-validate-code.html", target:"_blank"},
							 {id:48213, name:" 4.8.21.3 Operation $subsumes on CodeSystem",iconSkin:"icon01",url:"codesystem-operation-subsumes.html", target:"_blank"},
							 {id:48214, name:" 4.8.21.4 Operation $find-matches on CodeSystem",iconSkin:"pIcon01",url:"codesystem-operation-find-matches.html", target:"_blank"}
						]
					 }	 
				]
			},
            {
                id: 49, name: " 4.9 Resource ValueSet - Content", fineTitle: "值域集资源简介", subtitle: "(4.9.3.2的e.g前缺少括号)",iconSkin:"icon01",url:"valueset.html", target:"_blank",
				children:[
					{id:491, name:" 4.9.15 Resource ValueSet - Operations",iconSkin:"pIcon01",url:"valueset-operations.html", target:"_blank",
						children:[
							{id:4911, name:" 4.9.15.1 Operation $expand on ValueSet",iconSkin:"icon01",url:"valueset-operation-expand.html", target:"_blank"},
							{id:4912, name:" 4.9.15.2 Operation $validate-code on ValueSet",iconSkin:"icon01",url:"valueset-operation-validate-code.html", target:"_blank"},
						]
					}
				]
			},
            {id:410, name:" 4.10 Resource ConceptMap - Content",iconSkin:"pIcon01",url:"conceptmap.html", target:"_blank",
				children:[
					{id:411, name:" 4.10.15 Resource ConceptMap - Operations",iconSkin:"pIcon01",url:"conceptmap-operations.html", target:"_blank",
						children:[
							 {id:4111, name:" 4.10.15.1 Operation $translate on ConceptMap",iconSkin:"pIcon01",url:"conceptmap-operation-translate.html", target:"_blank"},
							 {id:4112, name:" 4.10.15.2 Operation $closure on ConceptMap",iconSkin:"pIcon01",url:"conceptmap-operation-closure.html", target:"_blank"}
						]
					}
				]
			},
            {id:411, name:" 4.11 Resource NamingSystem - Content",iconSkin:"pIcon01",url:"namingsystem.html", target:"_blank",
				children:[
					{id:4111, name:" 4.11.10 Resource NamingSystem - Operations",iconSkin:"pIcon01",url:"namingsystem-operations.html", target:"_blank",
						children:[
							{id:41111, name:" 4.11.10.1 Operation $preferred-id on NamingSystem",iconSkin:"pIcon01",url:"namingsystem-operation-preferred-id.html", target:"_blank"},
						]
					},
				]
			},
			{id:412, name:" 4.12 Resource TerminologyCapabilities - Content",iconSkin:"pIcon01",url:"terminologycapabilities.html", target:"_blank"},
		]},
	{ id:5, pId:0, name:" 5 Conformance Module ", open:false, iconSkin:"pIcon01",url:"conformance-module.html",fineTitle:"符合性组件", target:"_self",
        children:[
            {id:51, name:" 5.1 Profiling FHIR",iconSkin:"icon01",url:"profiling.html", target:"_blank"},
            {id:52, name:" 5.2 Resource CapabilityStatement - Content",iconSkin:"icon01",url:"capabilitystatement.html", target:"_blank",
				children:[
				   {id:5210, name:" 5.2.10 Resource CapabilityStatement - Operations",iconSkin:"pIcon01",url:"capabilitystatement-operations.html", target:"_blank",
						children:[
							{id:52101, name:" 5.2.10.1 Operation $subset on CapabilityStatement",iconSkin:"pIcon01",url:"capabilitystatement-operation-subset.html", target:"_blank"},
							{id:52102, name:" 5.2.10.2 Operation $implements on CapabilityStatement",fineTitle:"能力声明的实现测试操作（$implements）",iconSkin:"pIcon01",url:"capabilitystatement-operation-implements.html", target:"_blank"},
							{id:52103, name:" 5.2.10.3 Operation $conforms on CapabilityStatement",fineTitle:"能力声明对比操作（$conforms）",iconSkin:"pIcon01",url:"capabilitystatement-operation-conforms.html", target:"_blank"},
							{id:52104, name:" 5.2.10.4 Operation $versions on CapabilityStatement",iconSkin:"pIcon01",url:"capabilitystatement-operation-versions.html", target:"_blank"},
						]
				   },
				]
			},
            {id:53, name:" 5.3 Resource StructureDefinition - Content",iconSkin:"icon01",url:"structuredefinition.html", target:"_blank",
				children:[
					{id:531, name:" 5.3.11 Resource StructureDefinition - Operations",iconSkin:"pIcon01",url:"structuredefinition-operations.html", target:"_blank",
						children:[
							{id:5311, name:" 5.3.11.1 Operation $questionnaire on StructureDefinition",iconSkin:"pIcon01",url:"structuredefinition-operation-questionnaire.html", target:"_blank"},
							{id:5312, name:" 5.3.11.2 Operation $snapshot on StructureDefinition",iconSkin:"pIcon01",url:"structuredefinition-operation-snapshot.html", target:"_blank"},
						]
					},
				]
			},
            {id:54, name:" 5.4 Resource OperationDefinition - Content",iconSkin:"icon01",url:"operationdefinition.html", target:"_blank"},
            {id:55, name:" 5.5 Resource SearchParameter - Content",iconSkin:"pIcon01",url:"searchparameter.html", target:"_blank"},
            {id:58, name:" 5.8 Resource ImplementationGuide - Content",iconSkin:"pIcon01",url:"implementationguide.html", target:"_blank"},
            {id:59, name:" 5.9 Resource GraphDefinition - Content",iconSkin:"pIcon01",url:"graphdefinition.html", target:"_blank"},
		]},
	{ id:6, pId:0, name:" 6 Security and Privacy Module",fineTitle:"安全与隐私组件", open:false, iconSkin:"pIcon01",url:"secpriv-module.html", target:"_self",
        children:[
            {id:61, name:" 6.1 FHIR Security",iconSkin:"pIcon01",url:"security.html", target:"_blank"},
            {id:62, name:" 6.2 Resource Consent - Content",iconSkin:"pIcon01",url:"consent.html", target:"_blank"},
            {id:63, name:" 6.3 Resource Provenance - Content",iconSkin:"pIcon01",url:"provenance.html", target:"_blank"},
            {id:64, name:" 6.4 Resource AuditEvent - Content",iconSkin:"pIcon01",url:"auditevent.html", target:"_blank"},
		]},
	{ id:7, pId:0, name:" 7 Implementation Support Module", open:false, iconSkin:"pIcon01",url:"implsupport-module.html", target:"_self",
        children:[
            {id:71, name:" 7.1 Downloads",iconSkin:"pIcon01",url:"downloads.html", target:"_blank"},
            {id:72, name:" 7.2 Testing FHIR",iconSkin:"pIcon01",url:"testing.html", target:"_blank"},
            {id:73, name:" 7.3 Resource TestScript - Content",iconSkin:"pIcon01",url:"testscript.html", target:"_blank"},
            {id:74, name:" 7.4 Resource TestReport - Content",iconSkin:"pIcon01",url:"testreport.html", target:"_blank"},		
			{id:75, name:" 7.5 Validating Resources",iconSkin:"pIcon01",url:"validation.html", target:"_blank"},
            {id:76, name:" 7.6 Mappings to Other Standards",iconSkin:"pIcon01",url:"mappings.html", target:"_blank"},
            {id:77, name:" 7.7 FHIR Mapping Language",iconSkin:"pIcon01",url:"mapping-language.html", target:"_blank"},
            {id:78, name:" 7.8 Resource StructureMap - Content",iconSkin:"pIcon01",url:"structuremap.html", target:"_blank",
				children:[
					{id:781, name:" 7.8.10 Resource StructureMap - Operations",iconSkin:"pIcon01",url:"structuremap-operations.html", target:"_blank",
						children:[
							{id:7811, name:" 7.8.10.1 Operation $transform on StructureMap",iconSkin:"pIcon01",url:"structuremap-operation-transform.html", target:"_blank"},
						]
					},
				]
			},		
			{id:79, name:" 7.9 Common Example Scenarios in FHIR",iconSkin:"pIcon01",url:"usecases.html", target:"_blank"},
            {id:710, name:" 7.10 Clinical Safety",iconSkin:"pIcon01",url:"safety.html", target:"_blank"},
            {id:711, name:" 7.11 Appendix: HL7 EHR System Functional Model and FHIR",iconSkin:"pIcon01",url:"ehr-fm.html", target:"_blank"},
            {id:712, name:" 7.12 Managing Resource Identity",iconSkin:"pIcon01",url:"managing.html", target:"_blank"},			
			{id:713, name:" 7.13 Managing Push and Pull",iconSkin:"pIcon01",url:"pushpull.html", target:"_blank"},
            {id:714, name:" 7.14 Variations between Submitted data and Retrieved data",iconSkin:"pIcon01",url:"updates.html", target:"_blank"},
            {id:715, name:" 7.15 Multi-Language support in FHIR (Localization/Internationalization)",iconSkin:"pIcon01",url:"languages.html", target:"_blank"},
            {id:716, name:" 7.16 Integrated Examples",iconSkin:"pIcon01",url:"integrated-examples.html", target:"_blank"},			
			{id:717, name:" 7.17 Appendix: The Relationship between FHIR and other HL7 Standards",iconSkin:"pIcon01",url:"comparison.html", target:"_blank"},
		]},
	{ id:8, pId:0, name:" 8 Administration Module", open:false, iconSkin:"pIcon01",fineTitle: "主数据管理组件",url:"administration-module.html", target:"_self",
        children:[
            {id:81, name:" 8.1 Resource Patient - Content",iconSkin:"icon01",url:"patient.html", target:"_blank",
				children:[
					{id:811, name:" 8.1.17 Resource Patient - Operations",iconSkin:"pIcon01",url:"patient-operations.html", target:"_blank",
						children:[
							{id:8111, name:" 8.1.17.1 Operation $match on Patient",iconSkin:"pIcon01",url:"patient-operation-match.html", target:"_blank"},	
							{id:8112, name:" 8.1.17.2 Operation $everything on Patient",iconSkin:"pIcon01",url:"patient-operation-everything.html", target:"_blank"},	
						]
					},	
				]
			},
            {id:82, name:" 8.2 Resource RelatedPerson - Content",iconSkin:"pIcon01",url:"relatedperson.html", target:"_blank"},
            {id:83, name:" 8.3 Resource Group - Content",iconSkin:"pIcon01",url:"group.html", target:"_blank",
				children:[
					{id:831, name:" 8.3.9 Resource Group - Operations",iconSkin:"pIcon01",url:"group-operations.html", target:"_blank",
						children:[
                            {
                                id: 8311, name: " 8.3.9.1 Operation $everything on Group",fineTitle: "对群组的$everything操作",subtitle: "（US-Core的链接多了一个f）", iconSkin: "pIcon01", url: "group-operation-everything.html", target: "_blank"
                            },
						]
					},
				]
			},
            {id:84, name:" 8.4 Resource Practitioner - Content",iconSkin:"pIcon01",url:"practitioner.html", target:"_blank"},
			
		    {id:85, name:" 8.5 Resource PractitionerRole - Content",iconSkin:"pIcon01",url:"practitionerrole.html", target:"_blank"},
            {id:86, name:" 8.6 Resource Organization - Content",iconSkin:"pIcon01",url:"organization.html", target:"_blank"},
            {id:87, name:" 8.7 Resource Location - Content",iconSkin:"pIcon01",url:"location.html", target:"_blank"},
            {id:88, name:" 8.8 Resource HealthcareService - Content",iconSkin:"pIcon01",url:"healthcareservice.html", target:"_blank"},

		    {id:89, name:" 8.9 Resource Endpoint - Content",iconSkin:"pIcon01",url:"endpoint.html", target:"_blank"},
            {id:810, name:" 8.10 Resource EpisodeOfCare - Content",iconSkin:"pIcon01",fineTitle: "患病治疗期资源简介",url:"episodeofcare.html", target:"_blank"},
            {id:811, name:" 8.11 Resource Encounter - Content",iconSkin:"pIcon01",url:"encounter.html", target:"_blank",
				children:[
					{id:8111, name:" 8.11.11 Resource Encounter - Operations",iconSkin:"pIcon01",url:"encounter-operations.html", target:"_blank",
						children:[
							{id:81111, name:" 8.11.11.1 Operation $everything on Encounter",iconSkin:"pIcon01",url:"encounter-operation-everything.html", target:"_blank"},
						]
					},
				]
			},
            {id:812, name:" 8.12 Resource Account - Content",iconSkin:"pIcon01",url:"account.html", target:"_blank"},

			{id:813, name:" 8.13 Resource Flag - Content",iconSkin:"pIcon01",url:"flag.html", target:"_blank"},
            {id:814, name:" 8.14 Resource Device - Content",iconSkin:"pIcon01",url:"device.html", target:"_blank"},
            {id:815, name:" 8.15 Resource DeviceDefinition - Content",iconSkin:"pIcon01",url:"devicedefinition.html", target:"_blank"},
            {id:816, name:" 8.16 Resource DeviceMetric - Content",iconSkin:"pIcon01",url:"devicemetric.html", target:"_blank"},

			{id:817, name:" 8.17 Resource Substance - Content",iconSkin:"pIcon01",url:"substance.html", target:"_blank"},
            {id:818, name:" 8.18 Resource Person - Content",iconSkin:"pIcon01",url:"person.html", target:"_blank"},
            {id:819, name:" 8.19 Resource Linkage - Content",iconSkin:"pIcon01",url:"linkage.html", target:"_blank"},
            {id:820, name:" 8.20 Resource Communication - Content",iconSkin:"pIcon01",url:"communication.html", target:"_blank"},

			{id:821, name:" 8.21 Resource CommunicationRequest - Content",iconSkin:"pIcon01",url:"communicationrequest.html", target:"_blank"},
            {id:822, name:" 8.22 Resource ResearchStudy - Content",iconSkin:"pIcon01",url:"researchstudy.html", target:"_blank"},
            {id:823, name:" 8.23 Resource ResearchSubject - Content",iconSkin:"pIcon01",url:"researchsubject.html", target:"_blank"},
            {id:824, name:" 8.24 Resource ChargeItem - Content",iconSkin:"pIcon01",url:"chargeitem.html", target:"_blank"},

			{id:825, name:" 8.25 Resource ChargeItemDefinition - Content",iconSkin:"pIcon01",url:"chargeitemdefinition.html", target:"_blank",
				children:[
					 {id:8251, name:" 8.25.9 Resource ChargeItemDefinition - Operations",iconSkin:"pIcon01",url:"chargeitemdefinition-operations.html", target:"_blank",
						children:[
                            {
                                id: 82511, name: " 8.25.9.1 Operation $apply on ChargeItemDefinition",
                                fineTitle: "操作：应用收费项目定义",
                                subtitle: "（内容张冠李戴到ActivityDefinition的操作介绍）",
                                iconSkin: "pIcon01", url: "chargeitemdefinition-operation-apply.html", target: "_blank"
                            }
						]
					 }
				]
			
			},
            {id:826, name:" 8.26 Resource ObservationDefinition - Content",iconSkin:"pIcon01",url:"observationdefinition.html", target:"_blank"},
            {id:828, name:" 8.28 Resource CatalogEntry - Content",iconSkin:"pIcon01",url:"catalogentry.html", target:"_blank"},
            {id:829, name:" 8.29 Resource Invoice - Content",iconSkin:"pIcon01",url:"invoice.html", target:"_blank"},

			{id:830, name:" 8.30 Resource InsurancePlan - Content",iconSkin:"pIcon01",url:"insuranceplan.html", target:"_blank"},
            {id:831, name:" 8.31 Resource OrganizationAffiliation - Content",iconSkin:"pIcon01",url:"organizationaffiliation.html", target:"_blank"},
            {id:832, name:" 8.32 Resource VerificationResult - Content",iconSkin:"pIcon01",url:"verificationresult.html", target:"_blank"},
			]},
    {
        id: 9, pId: 0, name: " 9 Clinical Module", fineTitle:"临床摘要组件",  open:false, iconSkin:"pIcon01",url:"clinicalsummary-module.html", target:"_self",
        children:[
            {id:91, name:" 9.1 Resource AllergyIntolerance - Content",iconSkin:"pIcon01",url:"allergyintolerance.html", target:"_blank"},
            {id:92, name:" 9.2 Resource Condition - Content",iconSkin:"pIcon01",url:"condition.html", target:"_blank"},
            {id:93, name:" 9.3 Resource Procedure - Content",iconSkin:"pIcon01",url:"procedure.html", target:"_blank"},
            {id:94, name:" 9.4 Resource FamilyMemberHistory - Content",iconSkin:"pIcon01",url:"familymemberhistory.html", target:"_blank"},
			
			{id:95, name:" 9.5 Resource CarePlan - Content",iconSkin:"pIcon01",url:"careplan.html", target:"_blank"},
            {id:96, name:" 9.6 Resource Goal - Content",iconSkin:"pIcon01",url:"goal.html", target:"_blank"},
            {id:97, name:" 9.7 Resource CareTeam - Content",iconSkin:"pIcon01",url:"careteam.html", target:"_blank"},
            {id:98, name:" 9.8 Resource ClinicalImpression - Content",iconSkin:"pIcon01",url:"clinicalimpression.html", target:"_blank"},

			{id:99, name:" 9.9 Resource AdverseEvent - Content",iconSkin:"pIcon01",url:"adverseevent.html", target:"_blank"},
            {id:910, name:" 9.10 Resource DetectedIssue - Content",iconSkin:"pIcon01",url:"detectedissue.html", target:"_blank"},
            {id:911, name:" 9.11 Resource RiskAssessment - Content",iconSkin:"pIcon01",url:"riskassessment.html", target:"_blank"},

			]},
    {
        id: 10, pId: 0, name: " 10 Diagnostic Medicine Module", open: false, iconSkin: "pIcon01", url: "diagnostics-module.html", fineTitle: "辅助诊断组件", subtitle: "（资源关系图中的Sequence应为MolecularSequence）", target:"_self",
        children:[
            {id:101, name:" 10.1 Resource Observation - Content",iconSkin:"icon01",url:"observation.html", target:"_blank",
				children:[
					{id:1011, name:" 10.1.11 Resource Observation - Operations",iconSkin:"pIcon01",url:"observation-operations.html", target:"_blank",
						children:[
							{id:10111, name:" 10.1.11.1 Operation $stats on Observation",iconSkin:"pIcon01",url:"observation-operation-stats.html", target:"_blank"},
							{id:10112, name:" 10.1.11.2 Operation $lastn on Observation",iconSkin:"pIcon01",url:"observation-operation-lastn.html", target:"_blank"},
						]
					},
				]
			},
            {id:102, name:" 10.2 Resource Media - Content",iconSkin:"pIcon01",url:"media.html", target:"_blank"},
            {
                id: 103, name: " 10.3 Resource DiagnosticReport - Content", fineTitle: "诊断报告资源简介",subtitle: "(删除10.3.5.4节的ImageObjectStudy这是STU2的内容)",iconSkin:"pIcon01",url:"diagnosticreport.html", target:"_blank"},
            {id:104, name:" 10.4 Resource ImagingStudy - Content",iconSkin:"pIcon01",url:"imagingstudy.html", target:"_blank"},
			
            {id:106, name:" 10.6 Resource MolecularSequence - Content",iconSkin:"pIcon01",url:"molecularsequence.html", target:"_blank"},
            {id:107, name:" 10.7 Resource Specimen - Content",iconSkin:"pIcon01",url:"specimen.html", target:"_blank"},
            {id:108, name:" 10.8 Resource SpecimenDefinition - Content",iconSkin:"pIcon01",url:"specimendefinition.html", target:"_blank"},

			{id:109, name:" 10.9 Resource BodyStructure - Content",iconSkin:"pIcon01",url:"bodystructure.html", target:"_blank"},
            {id:1010, name:" 10.10 Genomics Implementation Guidance",iconSkin:"pIcon01",url:"genomics.html", target:"_blank"},
            {id:1011, name:" 10.11 Resource BiologicallyDerivedProduct - Content",iconSkin:"pIcon01",url:"biologicallyderivedproduct.html", target:"_blank"},

			]},
	{ id:11, pId:0, name:" 11 Medications Module", open:false, iconSkin:"pIcon01",url:"medications-module.html", target:"_self",
        children:[
            {id:111, name:" 11.1 Resource MedicationRequest - Content",iconSkin:"pIcon01",url:"medicationrequest.html", target:"_blank"},
            {id:112, name:" 11.2 Resource MedicationAdministration - Content",iconSkin:"pIcon01",url:"medicationadministration.html", target:"_blank"},
            {id:113, name:" 11.3 Resource MedicationDispense - Content",iconSkin:"pIcon01",url:"medicationdispense.html", target:"_blank"},
            {id:114, name:" 11.4 Resource MedicationStatement - Content",iconSkin:"pIcon01",url:"medicationstatement.html", target:"_blank"},
            {id:115, name:" 11.5 Resource Medication - Content",iconSkin:"pIcon01",url:"medication.html", target:"_blank"},
			
            {id:116, name:" 11.6 Resource MedicationKnowledge - Content",iconSkin:"pIcon01",url:"medicationknowledge.html", target:"_blank"},
            {id:117, name:" 11.7 Resource Immunization - Content",iconSkin:"pIcon01",url:"immunization.html", target:"_blank"},
            {id:118, name:" 11.8 Resource ImmunizationEvaluation - Content",iconSkin:"pIcon01",url:"immunizationevaluation.html", target:"_blank"},

			{id:119, name:" 11.9 Resource ImmunizationRecommendation - Content",iconSkin:"pIcon01",url:"immunizationrecommendation.html", target:"_blank"},
            {id:1110, name:" 11.10 Dosage",iconSkin:"pIcon01",url:"dosage.html", target:"_blank"},
            {id:1111, name:" 11.11 Resource MedicinalProduct - Content",iconSkin:"pIcon01",url:"medicinalproduct.html", target:"_blank",
				children:[
					{id:11111, name:" 11.11.8 Resource MedicinalProduct - Operations",iconSkin:"pIcon01",url:"medicinalproduct-operations.html", target:"_blank",
						children:[
							{id:111111, name:" 11.11.8.1 Operation $everything on MedicinalProduct",iconSkin:"pIcon01",url:"medicinalproduct-operation-everything.html", target:"_blank"},
						]
					},
				]
			},

			{id:1112, name:" 11.12 Resource MedicinalProductAuthorization - Content",iconSkin:"pIcon01",url:"medicinalproductauthorization.html", target:"_blank"},
            {id:1113, name:" 11.13 Resource MedicinalProductContraindication - Content",iconSkin:"pIcon01",url:"medicinalproductcontraindication.html", target:"_blank"},
            {id:1114, name:" 11.14 Resource MedicinalProductIndication - Content",iconSkin:"pIcon01",url:"medicinalproductindication.html", target:"_blank"},

			{id:1115, name:" 11.15 Resource MedicinalProductInteraction - Content",iconSkin:"pIcon01",url:"medicinalproductinteraction.html", target:"_blank"},
            {id:1116, name:" 11.16 Resource MedicinalProductUndesirableEffect - Content",iconSkin:"pIcon01",url:"medicinalproductundesirableeffect.html", target:"_blank"},
            {id:1117, name:" 11.17 Resource MedicinalProductIngredient - Content",iconSkin:"pIcon01",url:"medicinalproductingredient.html", target:"_blank"},

			{id:1118, name:" 11.18 Resource MedicinalProductManufactured - Content",iconSkin:"pIcon01",url:"medicinalproductmanufactured.html", target:"_blank"},
            {id:1119, name:" 11.19 Resource MedicinalProductPackaged - Content",iconSkin:"pIcon01",url:"medicinalproductpackaged.html", target:"_blank"},
            {id:1120, name:" 11.20 Resource MedicinalProductPharmaceutical - Content",iconSkin:"pIcon01",url:"medicinalproductpharmaceutical.html", target:"_blank"},

			{id:1121, name:" 11.21 Resource SubstanceSpecification - Content",iconSkin:"pIcon01",url:"substancespecification.html", target:"_blank"},
            {id:1122, name:" 11.22 Resource SubstancePolymer - Content",iconSkin:"pIcon01",url:"substancepolymer.html", target:"_blank"},
            {id:1123, name:" 11.23 Resource SubstanceProtein - Content",iconSkin:"pIcon01",url:"substanceprotein.html", target:"_blank"},

			{id:1124, name:" 11.24 Resource SubstanceNucleicAcid - Content",iconSkin:"pIcon01",url:"substancenucleicacid.html", target:"_blank"},
            {id:1125, name:" 11.25 Resource SubstanceReferenceInformation - Content",iconSkin:"pIcon01",url:"substancereferenceinformation.html", target:"_blank"},
            {id:1126, name:" 11.26 Resource SubstanceSourceMaterial - Content",iconSkin:"pIcon01",url:"substancesourcematerial.html", target:"_blank"},
            {id:1127, name:" 11.27 MarketingStatus",iconSkin:"pIcon01",url:"marketingstatus.html", target:"_blank"},

			{id:1128, name:" 11.28 Population",iconSkin:"pIcon01",url:"population.html", target:"_blank"},
            {id:1129, name:" 11.29 ProdCharacteristic",iconSkin:"pIcon01",url:"prodcharacteristic.html", target:"_blank"},
            {id:1130, name:" 11.30 ProductShelfLife",iconSkin:"pIcon01",url:"productshelflife.html", target:"_blank"},
            {id:1131, name:" 11.31 SubstanceAmount",iconSkin:"pIcon01",url:"productshelflife.html", target:"_blank"},
			]},
	{ id:12, pId:0, name:" 12 Workflow Module",fineTitle:" 工作流组件", open:false, iconSkin:"pIcon01",url:"workflow-module.html", target:"_self",
        children:[
            {id:121, name:" 12.1 Resource Task - Content",iconSkin:"pIcon01",url:"task.html", target:"_blank"},
            {id:125, name:" 12.5 Workflow Description",iconSkin:"pIcon01",url:"workflow.html", target:"_blank"},
            {id:126, name:" 12.6 Workflow Execution and Communication Patterns",iconSkin:"pIcon01",url:"workflow-communications.html", target:"_blank"},
            {id:127, name:" 12.7 Ad-Hoc Workflow Communication Patterns",iconSkin:"pIcon01",url:"workflow-ad-hoc.html", target:"_blank"},
            {id:128, name:" 12.8 Workflow Management Communication Patterns",iconSkin:"pIcon01",url:"workflow-management.html", target:"_blank"},

			{id:129, name:" 12.9 Usage Examples for Workflow Patterns",iconSkin:"pIcon01",url:"workflow-examples.html", target:"_blank"},
            {id:1210, name:" 12.10 Resource Appointment - Content",iconSkin:"pIcon01",url:"appointment.html", target:"_blank"},
            {id:1211, name:" 12.11 Resource AppointmentResponse - Content",iconSkin:"pIcon01",url:"appointmentresponse.html", target:"_blank"},

			{id:1212, name:" 12.12 Resource Schedule - Content",iconSkin:"pIcon01",url:"schedule.html", target:"_blank"},
            {id:1213, name:" 12.13 Resource Slot - Content",iconSkin:"pIcon01",url:"slot.html", target:"_blank"},
            {id:1214, name:" 12.14 Resource ServiceRequest - Content",iconSkin:"pIcon01",url:"servicerequest.html", target:"_blank"},
            {id:1215, name:" 12.15 Resource NutritionOrder - Content",iconSkin:"pIcon01",url:"nutritionorder.html", target:"_blank"},
            {id:1216, name:" 12.16 Resource VisionPrescription - Content",iconSkin:"pIcon01",url:"visionprescription.html", target:"_blank"},

			{id:1217, name:" 12.17 Resource ActivityDefinition - Content",iconSkin:"pIcon01",url:"activitydefinition.html", target:"_blank",
				children:[
					{id:12171, name:" 12.17.9 Resource ActivityDefinition - Operations",iconSkin:"pIcon01",url:"activitydefinition-operations.html", target:"_blank",
						children:[
							{id:121711, name:" 12.17.9.1 Operation $apply on ActivityDefinition",iconSkin:"pIcon01",url:"activitydefinition-operation-apply.html", target:"_blank"},
							{id:121712, name:" 12.17.9.2 Operation $data-requirements on ActivityDefinition",iconSkin:"pIcon01",url:"activitydefinition-operation-data-requirements.html", target:"_blank"},
						]
					},
					]	
			},
            {id:1218, name:" 12.18 Resource PlanDefinition - Content",iconSkin:"pIcon01",url:"plandefinition.html", target:"_blank",
				children:[
					{id:12181, name:" 12.18.9 Resource PlanDefinition - Operations",iconSkin:"pIcon01",url:"plandefinition-operations.html", target:"_blank",
						children:[
							{id:121811, name:" 12.18.9.1 Operation $apply on PlanDefinition",iconSkin:"pIcon01",url:"plandefinition-operation-apply.html", target:"_blank"},
							{id:121812, name:" 12.18.9.2 Operation $data-requirements on PlanDefinition",iconSkin:"pIcon01",url:"plandefinition-operation-data-requirements.html", target:"_blank"},
						]
					},
				]
			},
            {id:1219, name:" 12.19 Resource DeviceRequest - Content",iconSkin:"pIcon01",url:"devicerequest.html", target:"_blank"},

			{id:1220, name:" 12.20 Resource DeviceUseStatement - Content",iconSkin:"pIcon01",url:"deviceusestatement.html", target:"_blank"},
            {id:1221, name:" 12.21 Resource SupplyRequest - Content",iconSkin:"pIcon01",url:"supplyrequest.html", target:"_blank"},
            {id:1222, name:" 12.22 Resource SupplyDelivery - Content",iconSkin:"pIcon01",url:"supplydelivery.html", target:"_blank"},
            {id:1223, name:" 12.23 Resource ExampleScenario - Content",iconSkin:"pIcon01",url:"examplescenario.html", target:"_blank"},

			]},
	{ id:13, pId:0, name:" 13 Financial Module" , open:false, iconSkin:"pIcon01",url:"financial-module.html", target:"_self",
        children:[
            {id:131, name:" 13.1 Resource Coverage - Content",iconSkin:"pIcon01",fineTitle:"支付范围资源——介绍",url:"coverage.html", target:"_blank"},
            {id:132, name:" 13.2 Resource CoverageEligibilityRequest - Content" ,iconSkin:"pIcon01",url:"coverageeligibilityrequest.html", target:"_blank",
				children:[
					{id:1321, name:" 13.2.9 Resource CoverageEligibilityRequest - Operations",iconSkin:"pIcon01",url:"coverageeligibilityrequest-operations.html", target:"_blank",
						children:[
							{id:13211, name:" 13.2.9.1 Operation $submit on CoverageEligibilityRequest",iconSkin:"pIcon01",url:"coverageeligibilityrequest-operation-submit.html", target:"_blank"},
						]
					},
				]
			},
            {id:133, name:" 13.3 Resource CoverageEligibilityResponse - Content" ,iconSkin:"pIcon01",url:"coverageeligibilityresponse.html", target:"_blank"},
            {id:134, name:" 13.4 Resource EnrollmentRequest - Content" ,iconSkin:"pIcon01",url:"enrollmentrequest.html", target:"_blank"},
            {id:135, name:" 13.5 Resource EnrollmentResponse - Content" ,iconSkin:"pIcon01",url:"enrollmentresponse.html", target:"_blank"},
			
            {id:136, name:" 13.6 Resource Claim - Content" ,iconSkin:"pIcon01",url:"claim.html", target:"_blank",
				children:[
					 {id:1361, name:" 13.6.9 Resource Claim - Operations" ,iconSkin:"pIcon01",url:"claim-operations.html", target:"_blank",
						children:[
							{id:13611, name:" 13.6.9.1 Operation $submit on Claim" ,iconSkin:"pIcon01",url:"claim-operation-submit.html", target:"_blank"},
						]
					 },
				]
			},
            {id:137, name:" 13.7 Resource ClaimResponse - Content" ,iconSkin:"pIcon01",url:"claimresponse.html", target:"_blank"},
            {id:138, name:" 13.8 Resource PaymentNotice - Content" ,iconSkin:"pIcon01",url:"paymentnotice.html", target:"_blank"},

			{id:139, name:" 13.9 Resource PaymentReconciliation - Content" ,iconSkin:"pIcon01",url:"paymentreconciliation.html", target:"_blank"},
            {id:1310, name:" 13.10 Resource ExplanationOfBenefit - Content" ,iconSkin:"pIcon01",url:"explanationofbenefit.html", target:"_blank"},
            {id:1311, name:" 13.11 Resource Contract - Content" ,iconSkin:"pIcon01",url:"contract.html", target:"_blank"},

			]},
	{ id:14, pId:0, name:" 14 Clinical Reasoning" , open:false, iconSkin:"pIcon01",url:"clinicalreasoning-module.html", target:"_self",
        children:[
            {id:141, name:" 14.1 Using Expressions" ,iconSkin:"pIcon01",url:"clinicalreasoning-topics-using-expressions.html", target:"_blank"},
            {id:142, name:" 14.2 Definitional Resources" ,iconSkin:"pIcon01",url:"clinicalreasoning-topics-definitional-resources.html", target:"_blank"},
            {id:143, name:" 14.3 Representing Knowledge Artifacts" ,iconSkin:"pIcon01",url:"clinicalreasoning-knowledge-artifact-representation.html", target:"_blank"},
            {id:144, name:" 14.4 Sharing Knowledge Artifacts" ,iconSkin:"pIcon01",url:"clinicalreasoning-knowledge-artifact-distribution.html", target:"_blank"},
            {id:145, name:" 14.5 Clinical Decision Support Services" ,iconSkin:"pIcon01",url:"clinicalreasoning-cds-on-fhir.html", target:"_blank"},
			
            {id:146, name:" 14.6 Quality Reporting" ,iconSkin:"pIcon01",url:"clinicalreasoning-quality-reporting.html", target:"_blank"},
            {id:147, name:" 14.7 Resource EffectEvidenceSynthesis - Content" ,iconSkin:"pIcon01",url:"effectevidencesynthesis.html", target:"_blank"},
            {id:148, name:" 14.8 Resource EventDefinition - Content" ,iconSkin:"pIcon01",url:"eventdefinition.html", target:"_blank"},

			{id:149, name:" 14.9 Resource Evidence - Content" ,iconSkin:"pIcon01",url:"evidence.html", target:"_blank"},
            {id:1410, name:" 14.10 Resource EvidenceVariable - Content" ,iconSkin:"pIcon01",url:"evidencevariable.html", target:"_blank"},
            {id:1411, name:" 14.11 Resource Library - Content" ,iconSkin:"pIcon01",url:"library.html", target:"_blank",
				children:[
					{id:14111, name:" 14.11.9 Resource Library - Operations" ,iconSkin:"pIcon01",url:"library-operations.html", target:"_blank",
						children:[
							{id:141111, name:" 14.11.9.1 Operation $data-requirements on Library" ,iconSkin:"pIcon01",url:"library-operation-data-requirements.html", target:"_blank"},
						]
					},
				]
			},

            {id:1412, name:" 14.12 Resource GuidanceResponse - Content" ,iconSkin:"pIcon01",url:"guidanceresponse.html", target:"_blank"},
            {id:1413, name:" 14.13 Resource RequestGroup - Content" ,iconSkin:"pIcon01",url:"requestgroup.html", target:"_blank"},
            {id:1414, name:" 14.14 Resource Measure - Content" ,iconSkin:"pIcon01",url:"measure.html", target:"_blank",
				children:[
					{id:14141, name:"14.14.9 Resource Measure - Operations" ,iconSkin:"pIcon01",url:"measure-operations.html", target:"_blank",
						children:[
							{id:141411, name:" 14.14.9.1 Operation $evaluate-measure on Measure" ,iconSkin:"pIcon01",url:"measure-operation-evaluate-measure.html", target:"_blank"},
							{id:141412, name:" 14.14.9.2 Operation $data-requirements on Measure" ,iconSkin:"pIcon01",url:"measure-operation-data-requirements.html", target:"_blank"},
							{id:141413, name:" 14.14.9.3 Operation $submit-data on Measure" ,iconSkin:"pIcon01",url:"measure-operation-submit-data.html", target:"_blank"},
							{id:141414, name:" 14.14.9.4 Operation $collect-data on Measure" ,iconSkin:"pIcon01",url:"measure-operation-collect-data.html", target:"_blank"},
							{id:141415, name:" 14.14.9.5 Operation $care-gaps on Measure" ,iconSkin:"pIcon01",url:"measure-operation-care-gaps.html", target:"_blank"},
						]
					},
				]
			},

			{id:1415, name:" 14.15 Resource MeasureReport - Content" ,iconSkin:"pIcon01",url:"measurereport.html", target:"_blank"},
            {id:1416, name:" 14.16 Resource ResearchDefinition - Content" ,iconSkin:"pIcon01",url:"researchdefinition.html", target:"_blank"},
            {id:1417, name:" 14.17 Resource ResearchElementDefinition - Content" ,iconSkin:"pIcon01",url:"researchelementdefinition.html", target:"_blank"},
            {id:1418, name:" 14.18 Resource RiskEvidenceSynthesis - Content" ,iconSkin:"pIcon01",url:"riskevidencesynthesis.html", target:"_blank"},

			]},
];