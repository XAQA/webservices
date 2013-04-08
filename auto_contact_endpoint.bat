echo %date% > C:\PythonWebServices\webservices\contact_endpoint_log.txt
echo %time% >> C:\PythonWebServices\webservices\contact_endpoint_log.txt
python C:\PythonWebServices\webservices\contact_endpoint.py >> C:\PythonWebServices\webservices\contact_endpoint_log.txt