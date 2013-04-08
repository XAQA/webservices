echo %date% > C:\PythonWebServices\webservices\xactnet_endpoint_log.txt
echo %time% >> C:\PythonWebServices\webservices\xactnet_endpoint_log.txt
python C:\PythonWebServices\webservices\xactnet_endpoint.py >> C:\PythonWebServices\webservices\xactnet_endpoint_log.txt