dotnet publish -r linux-x64 -c Release
cp start-cloud.sh ./bin/Release/net5.0/linux-x64/start.sh
cf push