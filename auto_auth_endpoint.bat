echo %date% > C:\PythonWebServices\webservices\auth_endpoint_log.txt
echo %time% >> C:\PythonWebServices\webservices\auth_endpoint_log.txt
python C:\PythonWebServices\webservices\auth_endpoint.py >> C:\PythonWebServices\webservices\auth_endpoint_log.txt