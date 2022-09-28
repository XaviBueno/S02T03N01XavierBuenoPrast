
db = db.getSiblingDB('pizzeria')
db.dropDatabase()
db.clients.insertMany([
	{_id: "id_client1",nom:"client1",cognoms:"cognoms1",adreça:"adreça1",cp:"cp1",localitat:"ilocalitat1",provincia:"provincia1",telef: "telef1"},
	{_id: "id_client2",nom:"client2",cognoms:"cognoms2",adreça:"adreça2",cp:"cp2",localitat:"localitat2",provincia:"provincia1",telef: "telef2"},
	{_id: "id_client3",nom:"client3",cognoms:"cognoms3",adreça:"adreça3",cp:"cp3",localitat:"localitat3",provincia:"provincia1",telef: "telef3"},
	{_id: "id_client4",nom:"client4",cognoms:"cognoms4",adreça:"adreça4",cp:"cp2",localitat:"localitat4",provincia:"provincia1",telef: "telef4"},
	]
	)
	

db.botigues.insertMany([
	{_id:"id_botiga1",adreça:"adr_botiga1",cp:"cp1",localitat:"localitat1",provincia:"provincia1"},
	{_id:"id_botiga2",adreça:"adr_botiga2",cp:"cp2",localitat:"localitat2",provincia:"provincia1"},
	{_id:"id_botiga3",adreça:"adr_botiga3",cp:"cp3",localitat:"localitat3",provincia:"provincia1"},
	{_id:"id_botiga4",adreça:"adr_botiga4",cp:"cp4",localitat:"localitat3",provincia:"provincia1"}
	]
)

db.empleats.insertMany([
	{_id:"id_empleat1",nom:"nom1",cognoms:"cognoms1",nif:"nif1",telefon:"telefon1",funcio:"cuiner",botiga:"id_botiga1"},
	{_id:"id_empleat2",nom:"nom2",cognoms:"cognoms2",nif:"nif2",telefon:"telefon2",funcio:"repartidor",botiga:"id_botiga1"},
	{_id:"id_empleat3",nom:"nom3",cognoms:"cognoms3",nif:"nif3",telefon:"telefon3",funcio:"cuiner",botiga:"id_botiga1"},
	{_id:"id_empleat4",nom:"nom4",cognoms:"cognoms4",nif:"nif4",telefon:"telefon4",funcio:"repartidor",botiga:"id_botiga1"},
	{_id:"id_empleat5",nom:"nom5",cognoms:"cognoms5",nif:"nif5",telefon:"telefon5",funcio:"cuiner",botiga:"id_botiga1"},
	{_id:"id_empleat6",nom:"nom6",cognoms:"cognoms6",nif:"nif6",telefon:"telefon6",funcio:"repartidor",botiga:"id_botiga1"},
	{_id:"id_empleat7",nom:"nom7",cognoms:"cognoms7",nif:"nif7",telefon:"telefon7",funcio:"cuiner",botiga:"id_botiga1"},
	{_id:"id_empleat8",nom:"nom8",cognoms:"cognoms8",nif:"nif8",telefon:"telefon8",funcio:"repartidor",botiga:"id_botiga1"}
	]
)
db.productes.insertMany([
	{_id:"id_producte1",nom:"nom1",tipus:"beguda",imatge:"",descripcio:"desc1",preu:2},
	{_id:"id_producte2",nom:"nom2",tipus:"beguda",imatge:"",descripcio:"desc2",preu:2},
	{_id:"id_producte3",nom:"nom3",tipus:"pizza",imatge:"",descripcio:"desc3",categoria:"categoria1",preu:4},
	{_id:"id_producte4",nom:"nom4",tipus:"pizza",imatge:"",descripcio:"desc4",categoria:"categoria2",preu:4},
	{_id:"id_producte5",nom:"nom5",tipus:"hamburguesa",imatge:"",descripcio:"desc5",preu:6},
	{_id:"id_producte6",nom:"nom1",tipus:"hamburguesa",imatge:"",descripcio:"desc6",preu:6}
	]
)
	
	

db.comandes.insertMany([
	{_id:"id_comanda1",data_comanda: new Date(2022,0,24),client:"id_client1", entrega:"domicili",empleat:"id_empleat2",botiga:"id_botiga1",
		productes:[
			{producte:"id_producte1",
			quantitat:2},
			{producte:"id_producte3",
			quantitat:1}
		]
	},
	{_id:"id_comanda2",data_comanda: new Date(2022,0,24),client:"id_client2", entrega:"botiga",botiga:"id_botiga2",
		productes:[
			{producte:"id_producte2",
			quantitat:3},
			{producte:"id_producte4",
			quantitat:1}
		]
	},
	{_id:"id_comanda3",data_comanda: new Date(2022,0,25),client:"id_client1", entrega:"domicili",repartidor:"id_empleat4",botiga:"id_botiga3",
		productes:[
			{producte:"id_producte1",
			quantitat:2},
			{producte:"id_producte5",
			quantitat:2}
		]
		
	},
	{_id:"id_comanda4",data_comanda: new Date(2022,0,26),client:"id_client1", entrega:"botiga",botiga:"id_botiga3",
		productes:[
			{producte:"id_producte2",
			quantitat:4},
			{producte:"id_producte6",
			quantitat:4}
		]
	}
	]
)


