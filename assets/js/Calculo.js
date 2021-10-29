var optVuelo="";
var tot=0;


optVuelo = prompt("Eliga su destino \na) Aguascalientes\n b)Baja California  \n c)Baja California Sur \nd)Campeche  \ne)Coahuila de Zaragoza \nf)Colima \ng)Chiapas  \nh)Chihuahua  \ni)DF  \nj)Durango  \nk)Guanajuato  \nl)Guerrero   \nm)Hidalgo  \nn)Jalisco  \no)Michoacan  \np)Morelos  \nq)Nayarit  \nr)Nuevo leon   \ns)Oaxaca   \nt)Puebla  \nu)Queretaro  \nv)Quintana Roo  \nw)San Luis Potosi  \nx)Sinaloa   \ny)Sonora   \nz)Tabasco   \naa)Tamaulipas \nab)Tlaxcala  \nac)Veracruz \nad)Yucatan   \nae)Zacatecas" ) 


switch (optVuelo){
case "a":
    tot=124*150 ;
    break;

    case"b":
    tot=1732*150 ;
    break;

    case"c":
    tot=1153*150 ;
    break;
    case "d":
        tot=1511*150 ;
    break;

    case"e":
    tot=485*150 ;
    break;

    case"f":
    tot=28.8*150 ;
    break;
    case "g":
        tot=1024*150 ;
    break;

    case"h":
    tot=947*150 ;;
    break;

    case"i":
    tot=325.81*150 ;
    break;
    case "j":
        tot=27.6*150 ;
    break;

    case"k":
    tot=27.9*150 ;
    break;

    case"l":
    tot=724.7*150 ;
    break;
    case "m":
        tot=385*150 ;
    break;

    case"n":
    tot=28.2*150 ;
    break;

    case"o":
    tot=261.3*150 ;
    break;
    case "p":
        tot=506*150 ;
    break;

    case"q":
    tot=459.8*150 ;
    break;

    case"r":
    tot=753*150 ;
    break;
    case "s":
        tot=822*150 ;
    break;

    case"t":
    tot=270*150 ;
    break;

    case"u":
    tot=286*150 ;
    break;
    case "v":
        tot=1990*150 ;
    break;

    case"w":
    tot=134*150 ;
    break;

    case"x":
    tot=717*150 ;
    break;
    case "y":
        tot=1674*150 ;
    break;

    case"z":
    tot=1124*150 ;
    break;

    default:
            alert("seleccionaste una opciona invalida")
    
}


alert("tiene que pagar " + (tot + " pesos"));
