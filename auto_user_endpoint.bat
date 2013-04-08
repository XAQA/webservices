echo %date% > C:\PythonWebServices\webservices\user_endpoint_log.txt
echo %time% >> C:\PythonWebServices\webservices\user_endpoint_log.txt
python C:\PythonWebServices\webservices\user_endpoint.py >> C:\PythonWebServices\webservices\user_endpoint_log.txt