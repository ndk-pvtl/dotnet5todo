export DB_HOST=$(echo $VCAP_SERVICES | jq -r '."p.mysql"[0].credentials.hostname')
export DB_NAME=$(echo $VCAP_SERVICES | jq -r '."p.mysql"[0].credentials.name')
export DB_USER=$(echo $VCAP_SERVICES | jq -r '."p.mysql"[0].credentials.username')
export DB_PASS=$(echo $VCAP_SERVICES | jq -r '."p.mysql"[0].credentials.password')
export ConnectionStrings__db="server=$DB_HOST;database=$DB_NAME;username=$DB_USER;password=$DB_PASS";
export DOTNET_URLS="http://0.0.0.0:$PORT"
