(function(){var today=new Date();var dateString = (today.getMonth()+1)+'-'+today.getDate()+'-'+today.getFullYear()+'_'+today.toTimeString();var x = Math.ceil((2500*Math.random()-1));var y = Math.ceil((2500*Math.random()-1));var z = Math.ceil((2500*Math.random()-1));var fullName = "";var firstnamelist = ("James,John,Robert,Michael,William,David,Richard,Charles,Joseph,Thomas,Christopher,Daniel,Paul,Mark,Donald,George,Kenneth,Steven,Edward,Brian,Ronald,Anthony,Kevin,Jason,Matthew,Gary,Timothy,Jose,Larry,Jeffrey,Frank,Scott,Eric,Stephen,Andrew,Raymond,Gregory,Joshua,Jerry,Dennis,Walter,Patrick,Peter,Harold,Douglas,Henry,Carl,Arthur,Ryan,Roger,Joe,Juan,Jack,Albert,Jonathan,Justin,Terry,Gerald,Keith,Samuel,Willie,Ralph,Lawrence,Nicholas,Roy,Benjamin,Bruce,Brandon,Adam,Harry,Fred,Wayne,Billy,Steve,Louis,Jeremy,Aaron,Randy,Howard,Eugene,Carlos,Russell,Bobby,Victor,Martin,Ernest,Phillip,Todd,Jesse,Craig,Alan,Shawn,Clarence,Sean,Philip,Chris,Johnny,Earl,Jimmy,Antonio,Danny,Bryan,Tony,Luis,Mike,Stanley,Leonard,Nathan,Dale,Manuel,Rodney,Curtis,Norman,Allen,Marvin,Vincent,Glenn,Jeffery,Travis,Jeff,Chad,Jacob,Lee,Melvin,Alfred,Kyle,Francis,Bradley,Jesus,Herbert,Frederick,Ray,Joel,Edwin,Don,Eddie,Ricky,Troy,Randall,Barry,Alexander,Bernard,Mario,Leroy,Francisco,Marcus,Micheal,Theodore,Clifford,Miguel,Oscar,Jay,Jim,Tom,Calvin,Alex,Jon,Ronnie,Bill,Lloyd,Tommy,Leon,Derek,Warren,Darrell,Jerome,Floyd,Leo,Alvin,Tim,Wesley,Gordon,Dean,Greg,Jorge,Dustin,Pedro,Derrick,Dan,Lewis,Zachary,Corey,Herman,Maurice,Vernon,Roberto,Clyde,Glen,Hector,Shane,Ricardo,Sam,Rick,Lester,Brent,Ramon,Charlie,Tyler,Gilbert,Gene,Marc,Reginald,Ruben,Brett,Angel,Nathaniel,Rafael,Leslie,Edgar,Milton,Raul,Ben,Chester,Cecil,Duane,Franklin,Andre,Elmer,Brad,Gabriel,Ron,Mitchell,Roland,Arnold,Harvey,Jared,Adrian,Karl,Cory,Claude,Erik,Darryl,Jamie,Neil,Jessie,Christian,Javier,Fernando,Clinton,Ted,Mathew,Tyrone,Darren,Lonnie,Lance,Cody,Julio,Kelly,Kurt,Allan,Nelson,Guy,Clayton,Hugh,Max,Dwayne,Dwight,Armando,Felix,Jimmie,Everett,Jordan,Ian,Wallace,Ken,Bob,Jaime,Casey,Alfredo,Alberto,Dave,Ivan,Johnnie,Sidney,Byron,Julian,Isaac,Morris,Clifton,Willard,Daryl,Ross,Virgil,Andy,Marshall,Salvador,Perry,Kirk,Sergio,Marion,Tracy,Seth,Kent,Terrance,Rene,Eduardo,Terrence,Enrique,Freddie,Wade,Mary,Patricia,Linda,Barbara,Elizabeth,Jennifer,Maria,Susan,Margaret,Dorothy,Lisa,Nancy,Karen,Betty,Helen,Sandra,Donna,Carol,Ruth,Sharon,Michelle,Laura,Sarah,Kimberly,Deborah,Jessica,Shirley,Cynthia,Angela,Melissa,Brenda,Amy,Anna,Rebecca,Virginia,Kathleen,Pamela,Martha,Debra,Amanda,Stephanie,Carolyn,Christine,Marie,Janet,Catherine,Frances,Ann,Joyce,Diane,Alice,Julie,Heather,Teresa,Doris,Gloria,Evelyn,Jean,Cheryl,Mildred,Katherine,Joan,Ashley,Judith,Rose,Janice,Kelly,Nicole,Judy,Christina,Kathy,Theresa,Beverly,Denise,Tammy,Irene,Jane,Lori,Rachel,Marilyn,Andrea,Kathryn,Louise,Sara,Anne,Jacqueline,Wanda,Bonnie,Julia,Ruby,Lois,Tina,Phyllis,Norma,Paula,Diana,Annie,Lillian,Emily,Robin,Peggy,Crystal,Gladys,Rita,Dawn,Connie,Florence,Tracy,Edna,Tiffany,Carmen,Rosa,Cindy,Grace,Wendy,Victoria,Edith,Kim,Sherry,Sylvia,Josephine,Thelma,Shannon,Sheila,Ethel,Ellen,Elaine,Marjorie,Carrie,Charlotte,Monica,Esther,Pauline,Emma,Juanita,Anita,Rhonda,Hazel,Amber,Eva,Debbie,April,Leslie,Clara,Lucille,Jamie,Joanne,Eleanor,Valerie,Danielle,Megan,Alicia,Suzanne,Michele,Gail,Bertha,Darlene,Veronica,Jill,Erin,Geraldine,Lauren,Cathy,Joann,Lorraine,Lynn,Sally,Regina,Erica,Beatrice,Dolores,Bernice,Audrey,Yvonne,Annette,June,Samantha,Marion,Dana,Stacy,Ana,Renee,Ida,Vivian,Roberta,Holly,Brittany,Melanie,Loretta,Yolanda,Jeanette,Laurie,Katie,Kristen,Vanessa,Alma,Sue,Elsie,Beth,Jeanne,Vicki,Carla,Tara,Rosemary,Eileen,Terri,Gertrude,Lucy,Tonya,Ella,Stacey,Wilma,Gina,Kristin,Jessie,Natalie,Agnes,Vera,Willie,Charlene,Bessie,Delores,Melinda,Pearl,Arlene,Maureen,Colleen,Allison,Tamara,Joy,Georgia,Constance,Lillie,Claudia,Jackie,Marcia,Tanya,Nellie,Minnie,Marlene,Heidi,Glenda,Lydia,Viola,Courtney,Marian,Stella,Caroline,Dora,Jo,Vickie,Mattie,Terry,Maxine,Irma,Mabel,Marsha,Myrtle,Lena,Christy,Deanna,Patsy,Hilda,Gwendolyn,Jennie,Nora,Margie,Nina,Cassandra,Leah,Penny,Kay,Priscilla,Naomi,Carole,Brandy,Olga,Billie,Dianne,Tracey,Leona,Jenny,Felicia,Sonia,Miriam,Velma,Becky,Bobbie,Violet,Kristina,Toni,Misty,Mae,Shelly,Daisy,Ramona,Sherri,Erika,Katrina,Claire").split(",");var choosename = [Math.floor(Math.random() * 600)];var firstnameout = "";firstnameout += firstnamelist[choosename];var lastnamelist = ("Smith,Johnson,Williams,Jones,Brown,Davis,Miller,Wilson,Moore,Taylor,Anderson,Thomas,Jackson,White,Harris,Martin,Thompson,Garcia,Martinez,Robinson,Clark,Rodriguez,Lewis,Lee,Walker,Hall,Allen,Young,Hernandez,King,Wright,Lopez,Hill,Scott,Green,Adams,Baker,Gonzalez,Nelson,Carter,Mitchell,Perez,Roberts,Turner,Phillips,Campbell,Parker,Evans,Edwards,Collins,Stewart,Sanchez,Morris,Rogers,Reed,Cook,Morgan,Bell,Murphy,Bailey,Rivera,Cooper,Richardson,Cox,Howard,Ward,Torres,Peterson,Gray,Ramirez,James,Watson,Brooks,Kelly,Sanders,Price,Bennett,Wood,Barnes,Ross,Henderson,Coleman,Jenkins,Perry,Powell,Long,Patterson,Hughes,Flores,Washington,Butler,Simmons,Foster,Gonzales,Bryant,Alexander,Russell,Griffin,Diaz,Hayes,Myers,Ford,Hamilton,Graham,Sullivan,Wallace,Woods,Cole,West,Jordan,Owens,Reynolds,Fisher,Ellis,Harrison,Gibson,Mcdonald,Cruz,Marshall,Ortiz,Gomez,Murray,Freeman,Wells,Webb,Simpson,Stevens,Tucker,Porter,Hunter,Hicks,Crawford,Henry,Boyd,Mason,Morales,Kennedy,Warren,Dixon,Ramos,Reyes,Burns,Gordon,Shaw,Holmes,Rice,Robertson,Hunt,Black,Daniels,Palmer,Mills,Nichols,Grant,Knight,Ferguson,Rose,Stone,Hawkins,Dunn,Perkins,Hudson,Spencer,Gardner,Stephens,Payne,Pierce,Berry,Matthews,Arnold,Wagner,Willis,Ray,Watkins,Olson,Carroll,Duncan,Snyder,Hart,Cunningham,Bradley,Lane,Andrews,Ruiz,Harper,Fox,Riley,Armstrong,Carpenter,Weaver,Greene,Lawrence,Elliott,Chavez,Sims,Austin,Peters,Kelley,Franklin,Lawson,Fields,Gutierrez,Ryan,Schmidt,Carr,Vasquez,Castillo,Wheeler,Chapman,Oliver,Montgomery,Richards,Williamson,Johnston,Banks,Meyer,Bishop,Mccoy,Howell,Alvarez,Morrison,Hansen,Fernandez,Garza,Harvey,Little,Burton,Stanley,Nguyen,George,Jacobs,Reid,Kim,Fuller,Lynch,Dean,Gilbert,Garrett,Romero,Welch,Larson,Frazier,Burke,Hanson,Day,Mendoza,Moreno,Bowman,Medina,Fowler,Brewer,Hoffman,Carlson,Silva,Pearson,Holland,Douglas,Fleming,Jensen,Vargas,Byrd,Davidson,Hopkins,May,Terry,Herrera,Wade,Soto,Walters,Curtis,Neal,Caldwell,Lowe,Jennings,Barnett,Graves,Jimenez,Horton,Shelton,Barrett,Obrien,Castro,Sutton,Gregory,Mckinney,Lucas,Miles,Craig,Rodriquez,Chambers,Holt,Lambert,Fletcher,Watts,Bates,Hale,Rhodes,Pena,Beck,Newman,Haynes,Mcdaniel,Mendez,Bush,Vaughn,Parks,Dawson,Santiago,Norris,Hardy,Love,Steele,Curry,Powers,Schultz,Barker,Guzman,Page,Munoz,Ball,Keller,Chandler,Weber,Leonard,Walsh,Lyons,Ramsey,Wolfe,Schneider,Mullins,Benson,Sharp,Bowen,Daniel,Barber,Cummings,Hines,Baldwin,Griffith,Valdez,Hubbard,Salazar,Reeves,Warner,Stevenson,Burgess,Santos,Tate,Cross,Garner,Mann,Mack,Moss,Thornton,Dennis,Mcgee,Farmer,Delgado,Aguilar,Vega,Glover,Manning,Cohen,Harmon,Rodgers,Robbins,Newton,Todd,Blair,Higgins,Ingram,Reese,Cannon,Strickland,Townsend,Potter,Goodwin,Walton,Rowe,Hampton,Ortega,Patton,Swanson,Joseph,Francis,Goodman,Maldonado,Yates,Becker,Erickson,Hodges,Rios,Conner,Adkins,Webster,Norman,Malone,Hammond,Flowers,Cobb,Moody,Quinn,Blake,Maxwell,Pope,Floyd,Osborne,Paul,Mccarthy,Guerrero,Lindsey,Estrada,Sandoval,Gibbs,Tyler,Gross,Fitzgerald,Stokes,Doyle,Sherman,Saunders,Wise,Colon,Gill,Alvarado,Greer,Padilla,Simon,Waters,Nunez,Ballard,Schwartz,Mcbride,Houston,Christensen,Klein,Pratt,Briggs,Parsons,Mclaughlin,Zimmerman,French,Buchanan,Moran,Copeland,Roy,Pittman,Brady,Mccormick,Holloway,Brock,Poole,Frank,Logan,Owen,Bass,Marsh,Drake,Wong,Jefferson,Park,Morton,Abbott,Sparks,Patrick,Norton,Huff,Clayton,Massey,Lloyd,Figueroa,Carson,Bowers,Roberson,Barton,Tran,Lamb,Harrington,Casey,Boone,Cortez,Clarke,Mathis,Singleton,Wilkins,Cain,Bryan,Underwood,Hogan,Mckenzie,Collier,Luna,Phelps,Mcguire,Allison,Bridges,Wilkerson,Nash,Summers,Atkins").split(",");var chooselastname = [Math.floor(Math.random() * 500)];var lastnameout = "";lastnameout += lastnamelist[chooselastname];fullName = firstnameout + " " + lastnameout;var zipCodes = [[1,1,1,1,1,1,1,1,1,1], [99501,99504,99695,99734,99701,99788,99919,99654,99850,99801], [36204,35810,35613,35246,35292,35210,35233,35292,36119,36111], [72913,72206,72295,72115,71611,72401,72703,72919,72766,72303], [85220,86004,85311,85210,85277,85011,85082,86301,85717,85775], [1,1,1,1,1,1,1,1,1,1], [91301,91896,92812,93303,95066,91521,92030,93727,94624,95812], [80044,80323,80911,80222,80525,81502,80538,81010,81154,81047], ["06606","06138","06153","06515","06720","06858","06243","06817","06699","06238"], [19905,19725,19711,19960,19934,19810,19966,19890,19966,19971], [20032,20411,20001,20222,20577,20599,20066,20222,20468,20097], [32833,33433,33426,34210,34609,33915,33760,32121,33141,33199], [31702,30022,30605,30314,39901,30912,31906,30098,31211,31410], [96810,96843,96714,96762,96713,96749,96705,96769,96763,96772], [50011,50613,52409,52733,50333,52099,52752,52244,50661,51109], [83707,83802,83314,83252,83522,83812,83703,83404,83209,83441], [60006,60506,60459,62222,61799,61820,60611,60645,60102,61636], [46016,47407,47201,47933,47713,46856,46885,46406,47307,46634], [66117,66045,66210,66502,66061,66251,67502,67218,67735,67868], [42103,40702,41102,42718,41015,40503,40619,40219,40283,41073], [71303,70814,70896,71113,70435,70404,70065,70190,70149,70615], ["01719","01003","02118","02293","02304","02141","01027","01833","02059","02362"], [1,1,1,1,1,1,1,1,1,1], [21211,21405,20814,20882,20707,20913,20719,21504,20770,21648], ["04210","04336","04007","04112","04402","04921","04743","04286","04013","04761"], [48230,48554,48937,48108,49009,49525,49968,49855,49660,49721], [55431,55357,55038,55410,55599,55126,56303,56561,55816,56265], [64172,63116,64503,65110,64803,65805,64058,63702,65775,63445], [39533,39601,39710,38632,38703,39505,39532,39669,39212,39773], [59106,59402,59482,59255,59703,59353,59807,59108,59405,59936], [1,1,1,1,1,1,1,1,1,1], [28806,27117,27420,27599,28210,28288,27616,27909,28541,28412], [58206,58108,58507,58431,58702,58075,58458,58566,58402,58207], [68112,68175,69357,69033,68514,68527,68802,69001,68776,69201], ["03303","03773","03804","03868","03576","03266","03756","03063","03584","03450"], ["08404","08006","08721","07827","08110","08002","07013","07869","08620","08922"], [1,1,1,1,1,1,1,1,1,1], [87111,87192,88024,88242,88202,88101,88311,87402,88062,88401], [1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1], [89704,89509,89119,89143,89103,89009,89024,89446,89039,88901], [12214,10459,11233,14219,14212,11691,10111,14639,14639,12903], [44313,45244,45440,44720,45215,43221,45435,44132,45044,43612], [74012,74402,73942,74354,73506,74745,73648,73143,73070,73012], [1,1,1,1,1,1,1,1,1,1], [97207,97408,97138,97312,97501,97814,97710,97709,97819,97124], [15225,19121,17126,16544,18507,18104,17130,16803,16105,16927], [1,1,1,1,1,1,1,1,1,1], [1,1,1,1,1,1,1,1,1,1], ["02908","02921","02895","02830","02841","02808","02825","02861","02910","02809"], [29413,29587,29479,29926,29218,29611,29622,29860,29731,29505], [57104,57189,57522,57703,57201,57720,57551,57620,57078,57325], [1,1,1,1,1,1,1,1,1,1], [37213,38122,38305,37408,37130,37932,38303,37044,38261,37602], [78728,78246,77223,76120,75283,79116,79712,78416,79996,79423], [84604,84057,84402,84120,84119,84128,84790,84078,84651,84720], [22203,22802,23238,23515,24030,22603,23471,23436,24209,22604], ["05479","05603","05855","05201","05304","05641","05491","05156","05748","05452"], [99216,98227,98170,98421,98666,98595,98363,98226,98337,98802], [53207,53725,54402,54302,54701,54602,53779,54501,54904,53081], [25327,25714,26506,26104,26836,24740,25776,26034,26003,26847], [82931,82003,82010,82602,82638,82838,82729,83001,82071,82414], [1,1,1,1,1,1,1,1,1,1]];var RandomPhone = Math.floor(Math.random()*10000);if (RandomPhone < 1000 && RandomPhone > 100){RandomPhone =  "0" + RandomPhone;}if (RandomPhone < 100 && RandomPhone > 10) {RandomPhone =  "00" + RandomPhone;}if (RandomPhone < 10){RandomPhone =  "000" + RandomPhone;}var phoneNum = "800555" + RandomPhone;$('[name=test]').attr('checked',false);$('[name=insured_name]').val(fullName);$('[name=insured_street]').val('123 Anywhere Street');var $insured_state=$('[name=insured_state]');var randomState = Math.floor(Math.random()*(64) + 1);while(zipCodes[randomState-1][0] == 1){randomState = Math.floor(Math.random()*(64) + 1);}$insured_state.prop('selectedIndex', randomState);$insured_state.blur();$insured_state.change();var randomZipIndex = Math.floor(Math.random()*(10));var randomZip = zipCodes[randomState-1][randomZipIndex];if(String(randomZip).length == 4){temp = randomZip;randomZip = "0" + temp;}var $zip=$('[name=insured_zip]');$zip.val(randomZip);$zip.blur();$zip.change();var $phone=$('[name=insured_home_phone]');$phone.val(phoneNum);$phone.blur();var city = $('input[name=pl_area]:text').val();$insured_city.val("AUTOCITY");$insured_city.blur();$insured_city.change();var $email=$('[name=insured_email]');$email.val('email'+y+'@email.com');$email.blur();var $loss_type=$('select[name=loss_type]');var randomLossType = Math.floor(Math.random()*(18) + 1);$loss_type.prop('selectedIndex', randomLossType);$loss_type.blur();$loss_type.change();var $job_type=$('select[name=job_type]');$job_type.prop('selectedIndex', 1);$job_type.change();var $job_size=$('select[name=job_size]');var randomJobSize = Math.floor(Math.random()*(6) + 1);$job_size.prop('selectedIndex', randomJobSize);$job_size.blur();$job_size.change();var $cat_code=$('[name=cat_code]');$cat_code.val('CAT'+y);$cat_code.blur();var yesterday=new Date();yesterday.setDate(yesterday.getDate()-1);var $loss_date=$('#loss_date_visible');$loss_date.datepicker().datepicker('setDate',yesterday);$('#ui-datepicker-div').hide();$('[name=instructions]').val('');var $policy_type=$('select[name=policy_type]');$('option:eq(1)',$policy_type).attr('selected',true);$policy_type.change();var $coverage_name=$('[name=coverage_name_i_1]');$coverage_name.val('Example Coverage Name');var $coverage_type=$('select[name=coverage_type_1]');$('option:eq(1)',$coverage_type).attr('selected',true);$coverage_type.change();$('[name=policy_limit_1]').val('15'+z);$('[name=deductible_1]').val('3'+y);var $apply_to_1=$('select[name=apply_to_1]');$('option:eq(2)',$apply_to_1).attr('selected',true);$apply_to_1.change();$('[name=coinsurance_1]').val('25');$('[name=reserv_amount_1]').val(y);$('[name=mortgage_holder_1]').val('Mortgage Holder Name');$('[name=loan_number_1]').val(x+'-'+z+y);$policy_num.blur();window.location=$('#mortgage_add').attr("href");})();;