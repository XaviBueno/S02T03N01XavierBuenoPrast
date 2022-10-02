
db = db.getSiblingDB('culdampolla')
db.dropDatabase()

db.ulleres.insertMany([
	{_id:"id_ulleres1",marca:"marca1",grad_ud:"grad_ud1",grad_ue:"grad_ue1",muntura:"flotant",color_munt:"color1",color_vid:"color1",preu:100,proveidor:"id_proveidor1"},
	{_id:"id_ulleres2",marca:"marca2",grad_ud:"grad_ud2",grad_ue:"grad_ue2",muntura:"flotant",color_munt:"color2",color_vid:"color2",preu:200,proveidor:"id_proveidor1"},
	{_id:"id_ulleres3",marca:"marca3",grad_ud:"grad_ud3",grad_ue:"grad_ue3",muntura:"flotant",color_munt:"color3",color_vid:"color3",preu:300,proveidor:"id_proveidor2"},
	{_id:"id_ulleres4",marca:"marca4",grad_ud:"grad_ud4",grad_ue:"grad_ue4",muntura:"flotant",color_munt:"color4",color_vid:"color4",preu:400,proveidor:"id_providor4"},
	{_id:"id_ulleres5",marca:"marca5",grad_ud:"grad_ud5",grad_ue:"grad_ue5",muntura:"flotant",color_munt:"color5",color_vid:"color5",preu:500,proveidor:"id_proveidor5"},
	{_id:"id_ulleres6",marca:"marca6",grad_ud:"grad_ud6",grad_ue:"grad_ue6",muntura:"flotant",color_munt:"color6",color_vid:"color6",preu:600,proveidor:"id_proveidor1"},
	{_id:"id_ulleres7",marca:"marca7",grad_ud:"grad_ud7",grad_ue:"grad_ue7",muntura:"flotant",color_munt:"color7",color_vid:"color7",preu:100,proveidor:"id_proveidor6"},
	{_id:"id_ulleres8",marca:"marca8",grad_ud:"grad_ud8",grad_ue:"grad_ue8",muntura:"flotant",color_munt:"color8",color_vid:"color8",preu:400,proveidor:"id_proveidor6"},
	{_id:"id_ulleres9",marca:"marca9",grad_ud:"grad_ud9",grad_ue:"grad_ue9",muntura:"flotant",color_munt:"color9",color_vid:"color9",preu:300,proveidor:"id_proveidor6"}
	]
)
	
db.proveidor.insertMany([
	{_id:"id_proveidor1",nom: "proveidor1",carrer:"carrer1",num:"num1",pis:"pis1",porta:"porta1",ciutat:"ciutat1",cp:"cp1",pais:"pais1",telef:"telef1",fax:"fax1",nif:"nif1"},
	{_id:"id_proveidor2",nom: "proveidor2",carrer:"carrer2",num:"num2",pis:"pis2",porta:"porta2",ciutat:"ciutat2",cp:"cp2",pais:"pais2",telef:"telef2",fax:"fax2",nif:"nif2"},
	{_id:"id_proveidor3",nom: "proveidor3",carrer:"carrer3",num:"num3",pis:"pis3",porta:"porta3",ciutat:"ciutat3",cp:"cp3",pais:"pais3",telef:"telef3",fax:"fax3",nif:"nif3"},
	{_id:"id_proveidor4",nom: "proveidor4",carrer:"carrer4",num:"num4",pis:"pis4",porta:"porta4",ciutat:"ciutat4",cp:"cp4",pais:"pais4",telef:"telef3",fax:"fax3",nif:"nif3"},
	{_id:"id_proveidor5",nom: "proveidor5",carrer:"carrer5",num:"num5",pis:"pis5",porta:"porta5",ciutat:"ciutat5",cp:"cp5",pais:"pais5",telef:"telef3",fax:"fax3",nif:"nif3"},
	{_id:"id_proveidor6",nom: "proveidor6",carrer:"carrer6",num:"num6",pis:"pis6",porta:"porta6",ciutat:"ciutat6",cp:"cp6",pais:"pais6",telef:"telef6",fax:"fax6",nif:"nif6"}
	]
)



db.clients.insertMany([
	{_id: "id_client1",nom:"client1",cp:"cp1",tel:"tel1",mail:"mail1",data_reg:new Date(2022,02,15)},
	{_id: "id_client2",nom:"client2",cp:"cp2",tel:"tel2",mail:"mail2",data_reg:new Date(2022,02,25),recomanat_per:""},
	{_id: "id_client3",nom:"client3",cp:"cp3",tel:"tel3",mail:"mail3",data_reg:new Date(2022,04,12),recomanat_per:""},
	{_id: "id_client4",nom:"client4",cp:"cp4",tel:"tel4",mail:"mail4",data_reg:new Date(2022,06,18),recomanat_per:"id_client3"},
	{_id: "id_client5",nom:"client5",cp:"cp5",tel:"tel5",mail:"mail5",data_reg:new Date(2022,08,05),recomanat_per:""},
	{_id: "id_client6",nom:"client6",cp:"cp6",tel:"tel6",mail:"mail6",data_reg:new Date(2022,07,31),recomanat_per:"id_client3"},
	{_id: "id_client7",nom:"client7",cp:"cp7",tel:"tel7",mail:"mail7",data_reg:new Date(2022,11,10),recomanat_per:""},
	{_id: "id_client8",nom:"client8",cp:"cp8",tel:"tel8",mail:"mail8",data_reg:new Date(2022,09,01),recomanat_per:""},
	{_id: "id_client9",nom:"client9",cp:"cp9",tel:"tel9",mail:"mail9",data_reg:new Date(2022,10,31),recomanat_per:""},
	{_id: "id_client10",nom:"client10",cp:"cp10",tel:"tel10",mail:"mail10",data_reg:new Date(2022,10,15),recomanat_per:"id_client6"},
	{_id: "id_client11",nom:"client11",cp:"cp11",tel:"tel11",mail:"mail11",data_reg:new Date(2022,06,07),recomanat_per:"id_client6"}
	]
)



db.vendes.insertMany([
	{client_id:"id_client3",ulleres_id:["id_ulleres5","id_ulleres4"],empleat:"empleat1",data_venta:new Date(2022,07,18)},
	{client_id:"id_client1",ulleres_id:"id_ulleres9",empleat:"empleat4",data_venta:new Date(2022,12,20)},
	{client_id:"id_client8",ulleres_id:"id_ulleres4",empleat:"empleat3",data_venta:new Date(2022,07,03)},
	{client_id:"id_client6",ulleres_id:"id_ulleres8",empleat:"empleat5",data_venta:new Date(2022,11,15)},
	{client_id:"id_client10",ulleres_id:["id_ulleres7","id_ulleres8"],empleat:"empleat2",data_venta:new Date(2022,04,18)},
	{client_id:"id_client9",ulleres_id:"id_ulleres6",empleat:"empleat5",data_venta:new Date(2022,09,07)},
	{client_id:"id_client7",ulleres_id:"id_ulleres2",empleat:"empleat2",data_venta:new Date(2022,06,05)},
	{client_id:"id_client11",ulleres_id:"id_ulleres3",empleat:"empleat1",data_venta:new Date(2022,03,14)}
	]
)
	

	