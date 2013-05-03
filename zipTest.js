var client = new XMLHttpRequest();
client.open("GET", "http://zip.elevenbasetwo.com/v2/US/" + randomZip, true);
client.onreadystatechange = function(){
if(client.readyState == 4) {
result = JSON.parse(client.responseText);
var $insured_city=$('[name=insured_city]');
$insured_city.val(result["city"]);
$insured_city.blur();
$insured_city.change();
};
};
client.send();