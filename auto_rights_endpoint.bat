echo %date% > C:\PythonWebServices\webservices\rights_endpoint_log.txt
echo %time% >> C:\PythonWebServices\webservices\rights_endpoint_log.txt
python C:\PythonWebServices\webservices\rights_endpoint.py >> C:\PythonWebServices\webservices\rights_endpoint_log.txt