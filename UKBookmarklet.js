(function(){
//data
//=========================================================================
//names
var firstnamelist = ("James,John,Robert,Michael,William,David,Richard,Charles,Joseph,Thomas,Christopher,Daniel,Paul,Mark,Donald,George,Kenneth,Steven,Edward,Brian,Ronald,Anthony,Kevin,Jason,Matthew,Gary,Timothy,Jose,Larry,Jeffrey,Frank,Scott,Eric,Stephen,Andrew,Raymond,Gregory,Joshua,Jerry,Dennis,Walter,Patrick,Peter,Harold,Douglas,Henry,Carl,Arthur,Ryan,Roger,Joe,Juan,Jack,Albert,Jonathan,Justin,Terry,Gerald,Keith,Samuel,Willie,Ralph,Lawrence,Nicholas,Roy,Benjamin,Bruce,Brandon,Adam,Harry,Fred,Wayne,Billy,Steve,Louis,Jeremy,Aaron,Randy,Howard,Eugene,Carlos,Russell,Bobby,Victor,Martin,Ernest,Phillip,Todd,Jesse,Craig,Alan,Shawn,Clarence,Sean,Philip,Chris,Johnny,Earl,Jimmy,Antonio,Danny,Bryan,Tony,Luis,Mike,Stanley,Leonard,Nathan,Dale,Manuel,Rodney,Curtis,Norman,Allen,Marvin,Vincent,Glenn,Jeffery,Travis,Jeff,Chad,Jacob,Lee,Melvin,Alfred,Kyle,Francis,Bradley,Jesus,Herbert,Frederick,Ray,Joel,Edwin,Don,Eddie,Ricky,Troy,Randall,Barry,Alexander,Bernard,Mario,Leroy,Francisco,Marcus,Micheal,Theodore,Clifford,Miguel,Oscar,Jay,Jim,Tom,Calvin,Alex,Jon,Ronnie,Bill,Lloyd,Tommy,Leon,Derek,Warren,Darrell,Jerome,Floyd,Leo,Alvin,Tim,Wesley,Gordon,Dean,Greg,Jorge,Dustin,Pedro,Derrick,Dan,Lewis,Zachary,Corey,Herman,Maurice,Vernon,Roberto,Clyde,Glen,Hector,Shane,Ricardo,Sam,Rick,Lester,Brent,Ramon,Charlie,Tyler,Gilbert,Gene,Marc,Reginald,Ruben,Brett,Angel,Nathaniel,Rafael,Leslie,Edgar,Milton,Raul,Ben,Chester,Cecil,Duane,Franklin,Andre,Elmer,Brad,Gabriel,Ron,Mitchell,Roland,Arnold,Harvey,Jared,Adrian,Karl,Cory,Claude,Erik,Darryl,Jamie,Neil,Jessie,Christian,Javier,Fernando,Clinton,Ted,Mathew,Tyrone,Darren,Lonnie,Lance,Cody,Julio,Kelly,Kurt,Allan,Nelson,Guy,Clayton,Hugh,Max,Dwayne,Dwight,Armando,Felix,Jimmie,Everett,Jordan,Ian,Wallace,Ken,Bob,Jaime,Casey,Alfredo,Alberto,Dave,Ivan,Johnnie,Sidney,Byron,Julian,Isaac,Morris,Clifton,Willard,Daryl,Ross,Virgil,Andy,Marshall,Salvador,Perry,Kirk,Sergio,Marion,Tracy,Seth,Kent,Terrance,Rene,Eduardo,Terrence,Enrique,Freddie,Wade,Mary,Patricia,Linda,Barbara,Elizabeth,Jennifer,Maria,Susan,Margaret,Dorothy,Lisa,Nancy,Karen,Betty,Helen,Sandra,Donna,Carol,Ruth,Sharon,Michelle,Laura,Sarah,Kimberly,Deborah,Jessica,Shirley,Cynthia,Angela,Melissa,Brenda,Amy,Anna,Rebecca,Virginia,Kathleen,Pamela,Martha,Debra,Amanda,Stephanie,Carolyn,Christine,Marie,Janet,Catherine,Frances,Ann,Joyce,Diane,Alice,Julie,Heather,Teresa,Doris,Gloria,Evelyn,Jean,Cheryl,Mildred,Katherine,Joan,Ashley,Judith,Rose,Janice,Kelly,Nicole,Judy,Christina,Kathy,Theresa,Beverly,Denise,Tammy,Irene,Jane,Lori,Rachel,Marilyn,Andrea,Kathryn,Louise,Sara,Anne,Jacqueline,Wanda,Bonnie,Julia,Ruby,Lois,Tina,Phyllis,Norma,Paula,Diana,Annie,Lillian,Emily,Robin,Peggy,Crystal,Gladys,Rita,Dawn,Connie,Florence,Tracy,Edna,Tiffany,Carmen,Rosa,Cindy,Grace,Wendy,Victoria,Edith,Kim,Sherry,Sylvia,Josephine,Thelma,Shannon,Sheila,Ethel,Ellen,Elaine,Marjorie,Carrie,Charlotte,Monica,Esther,Pauline,Emma,Juanita,Anita,Rhonda,Hazel,Amber,Eva,Debbie,April,Leslie,Clara,Lucille,Jamie,Joanne,Eleanor,Valerie,Danielle,Megan,Alicia,Suzanne,Michele,Gail,Bertha,Darlene,Veronica,Jill,Erin,Geraldine,Lauren,Cathy,Joann,Lorraine,Lynn,Sally,Regina,Erica,Beatrice,Dolores,Bernice,Audrey,Yvonne,Annette,June,Samantha,Marion,Dana,Stacy,Ana,Renee,Ida,Vivian,Roberta,Holly,Brittany,Melanie,Loretta,Yolanda,Jeanette,Laurie,Katie,Kristen,Vanessa,Alma,Sue,Elsie,Beth,Jeanne,Vicki,Carla,Tara,Rosemary,Eileen,Terri,Gertrude,Lucy,Tonya,Ella,Stacey,Wilma,Gina,Kristin,Jessie,Natalie,Agnes,Vera,Willie,Charlene,Bessie,Delores,Melinda,Pearl,Arlene,Maureen,Colleen,Allison,Tamara,Joy,Georgia,Constance,Lillie,Claudia,Jackie,Marcia,Tanya,Nellie,Minnie,Marlene,Heidi,Glenda,Lydia,Viola,Courtney,Marian,Stella,Caroline,Dora,Jo,Vickie,Mattie,Terry,Maxine,Irma,Mabel,Marsha,Myrtle,Lena,Christy,Deanna,Patsy,Hilda,Gwendolyn,Jennie,Nora,Margie,Nina,Cassandra,Leah,Penny,Kay,Priscilla,Naomi,Carole,Brandy,Olga,Billie,Dianne,Tracey,Leona,Jenny,Felicia,Sonia,Miriam,Velma,Becky,Bobbie,Violet,Kristina,Toni,Misty,Mae,Shelly,Daisy,Ramona,Sherri,Erika,Katrina,Claire").split(",");
var lastnamelist = ("Smith,Johnson,Williams,Jones,Brown,Davis,Miller,Wilson,Moore,Taylor,Anderson,Thomas,Jackson,White,Harris,Martin,Thompson,Garcia,Martinez,Robinson,Clark,Rodriguez,Lewis,Lee,Walker,Hall,Allen,Young,Hernandez,King,Wright,Lopez,Hill,Scott,Green,Adams,Baker,Gonzalez,Nelson,Carter,Mitchell,Perez,Roberts,Turner,Phillips,Campbell,Parker,Evans,Edwards,Collins,Stewart,Sanchez,Morris,Rogers,Reed,Cook,Morgan,Bell,Murphy,Bailey,Rivera,Cooper,Richardson,Cox,Howard,Ward,Torres,Peterson,Gray,Ramirez,James,Watson,Brooks,Kelly,Sanders,Price,Bennett,Wood,Barnes,Ross,Henderson,Coleman,Jenkins,Perry,Powell,Long,Patterson,Hughes,Flores,Washington,Butler,Simmons,Foster,Gonzales,Bryant,Alexander,Russell,Griffin,Diaz,Hayes,Myers,Ford,Hamilton,Graham,Sullivan,Wallace,Woods,Cole,West,Jordan,Owens,Reynolds,Fisher,Ellis,Harrison,Gibson,Mcdonald,Cruz,Marshall,Ortiz,Gomez,Murray,Freeman,Wells,Webb,Simpson,Stevens,Tucker,Porter,Hunter,Hicks,Crawford,Henry,Boyd,Mason,Morales,Kennedy,Warren,Dixon,Ramos,Reyes,Burns,Gordon,Shaw,Holmes,Rice,Robertson,Hunt,Black,Daniels,Palmer,Mills,Nichols,Grant,Knight,Ferguson,Rose,Stone,Hawkins,Dunn,Perkins,Hudson,Spencer,Gardner,Stephens,Payne,Pierce,Berry,Matthews,Arnold,Wagner,Willis,Ray,Watkins,Olson,Carroll,Duncan,Snyder,Hart,Cunningham,Bradley,Lane,Andrews,Ruiz,Harper,Fox,Riley,Armstrong,Carpenter,Weaver,Greene,Lawrence,Elliott,Chavez,Sims,Austin,Peters,Kelley,Franklin,Lawson,Fields,Gutierrez,Ryan,Schmidt,Carr,Vasquez,Castillo,Wheeler,Chapman,Oliver,Montgomery,Richards,Williamson,Johnston,Banks,Meyer,Bishop,Mccoy,Howell,Alvarez,Morrison,Hansen,Fernandez,Garza,Harvey,Little,Burton,Stanley,Nguyen,George,Jacobs,Reid,Kim,Fuller,Lynch,Dean,Gilbert,Garrett,Romero,Welch,Larson,Frazier,Burke,Hanson,Day,Mendoza,Moreno,Bowman,Medina,Fowler,Brewer,Hoffman,Carlson,Silva,Pearson,Holland,Douglas,Fleming,Jensen,Vargas,Byrd,Davidson,Hopkins,May,Terry,Herrera,Wade,Soto,Walters,Curtis,Neal,Caldwell,Lowe,Jennings,Barnett,Graves,Jimenez,Horton,Shelton,Barrett,Obrien,Castro,Sutton,Gregory,Mckinney,Lucas,Miles,Craig,Rodriquez,Chambers,Holt,Lambert,Fletcher,Watts,Bates,Hale,Rhodes,Pena,Beck,Newman,Haynes,Mcdaniel,Mendez,Bush,Vaughn,Parks,Dawson,Santiago,Norris,Hardy,Love,Steele,Curry,Powers,Schultz,Barker,Guzman,Page,Munoz,Ball,Keller,Chandler,Weber,Leonard,Walsh,Lyons,Ramsey,Wolfe,Schneider,Mullins,Benson,Sharp,Bowen,Daniel,Barber,Cummings,Hines,Baldwin,Griffith,Valdez,Hubbard,Salazar,Reeves,Warner,Stevenson,Burgess,Santos,Tate,Cross,Garner,Mann,Mack,Moss,Thornton,Dennis,Mcgee,Farmer,Delgado,Aguilar,Vega,Glover,Manning,Cohen,Harmon,Rodgers,Robbins,Newton,Todd,Blair,Higgins,Ingram,Reese,Cannon,Strickland,Townsend,Potter,Goodwin,Walton,Rowe,Hampton,Ortega,Patton,Swanson,Joseph,Francis,Goodman,Maldonado,Yates,Becker,Erickson,Hodges,Rios,Conner,Adkins,Webster,Norman,Malone,Hammond,Flowers,Cobb,Moody,Quinn,Blake,Maxwell,Pope,Floyd,Osborne,Paul,Mccarthy,Guerrero,Lindsey,Estrada,Sandoval,Gibbs,Tyler,Gross,Fitzgerald,Stokes,Doyle,Sherman,Saunders,Wise,Colon,Gill,Alvarado,Greer,Padilla,Simon,Waters,Nunez,Ballard,Schwartz,Mcbride,Houston,Christensen,Klein,Pratt,Briggs,Parsons,Mclaughlin,Zimmerman,French,Buchanan,Moran,Copeland,Roy,Pittman,Brady,Mccormick,Holloway,Brock,Poole,Frank,Logan,Owen,Bass,Marsh,Drake,Wong,Jefferson,Park,Morton,Abbott,Sparks,Patrick,Norton,Huff,Clayton,Massey,Lloyd,Figueroa,Carson,Bowers,Roberson,Barton,Tran,Lamb,Harrington,Casey,Boone,Cortez,Clarke,Mathis,Singleton,Wilkins,Cain,Bryan,Underwood,Hogan,Mckenzie,Collier,Luna,Phelps,Mcguire,Allison,Bridges,Wilkerson,Nash,Summers,Atkins").split(",");

//alphabet - prefix for street
var alpha = ("A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z").split(",");

//generic street names
var street = ["Drive", "Avenue", "Street", "Boulevard", "Road", "Lane", "Heights", "Bend", "Bay", "Alley"];

//first half of postal codes
var postalCity = [[["NW6", "Killburn"], ["IG1 1", "Barking"], ["E11 1", "Leytonstone"], ["E14", "Poplar"], ["NW1 0", "Willesden"], ["SE1", "Southwark"], ["SW4", "Clapham"], ["EN2", "Enfield"], ["N12", "North Finchley"], ["TW3", "Hounslow"], ["DA1 5", "Bexley"], ["GL1", "Gloucester"], ["CR8", "Purley"]], [["BT6 8", "Caledon"], ["BT4 1", "Toomebridge"], ["BT5 4", "Ballypatrick"], ["BT5 6", "Portrush"], ["BT6 0", "Kingsmills"], ["BT7 1", "Moygashel"], ["BT5 7", "Castlecatt"]], [["EH8 7", "Edinburgh"], ["CA1 3", "Cockermouth"], ["G41", "Glasgow"], ["IV1 3", "Balvraid"], ["DG1", "Dumfries"], ["EH2 1", "Musselburgh"], ["IV1 9", "Dounie"], ["KY1 3", "Kinross"], ["CA1 2", "Rosthwaite"], ["EH1 9", "Bonnyrigg"], ["EH5 2", "Broxburn"], ["EH3 7", "Fala"], ["PA1 2", "Lochwinnoch"]], [["SA1", "Swansea"], ["CH7 6", "Mold"], ["PL1 5", "Launceston"], ["SA4 4", "Llandysul"], ["WN7", "Leigh"], ["SY1 3", "Marley Green"], ["SY8", "Cleehill"], ["CF3 2", "Brynmenyn"], ["PL1 5", "West Curry"], ["SA1 1", "Melincryddan"], ["CH1", "Chester"], ["NP7", "Llanelly"], ["SA3", "Pennard"]]]

//second half of postal codes
var doubleValPostal = alpha[Math.floor(Math.random()*alpha.length)] + alpha[Math.floor(Math.random()*alpha.length)];
var tripleValPostal = Math.round(Math.random()*9) + doubleValPostal;


//jQuery
//=========================================================================
//customer name
var custFName = firstnamelist[Math.floor(Math.random()*(firstnamelist.length))];
var custLName = lastnamelist[Math.floor(Math.random()*(lastnamelist.length))];
var $custName=$('[name=insured_name]');
$custName.val(custFName + " " + custLName);
$custName.blur();

//street
var streetLetter = alpha[Math.floor(Math.random()*alpha.length)];
var streetName = street[Math.floor(Math.random()*street.length)];
var $street=$('[name=insured_street]');
$street.val(streetLetter + ". " + streetName);
$street.blur();

//city
var randRegion = Math.floor(Math.random()*(5-1) + 1);
//note - need to subtract 1 from randRegion in postalCity index because drop down starts at index 1 and postalCity starts at 0
var randPostalCity = postalCity[randRegion-1][Math.floor(Math.random()*postalCity.length)];
var $city=$('[name=insured_city]');
$city.val(randPostalCity[1]);
$city.blur();

//country/region
var $region=$('[name=insured_state]');
$region.prop('selectedIndex', randRegion);
$region.change();

//postal code
var $postal=$('[name=insured_zip]');
if(randPostalCity[0].length == 5)
{
	$postal.val(randPostalCity[0] + doubleValPostal);
}
else
{
	$postal.val(randPostalCity[0] + " " + tripleValPostal);
}
$postal.change();


})();