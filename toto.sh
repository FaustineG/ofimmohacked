#!/bin/bash
echo "fetching data"

# URL to fetch data from
URL="https://www-api.ouestfrance-immo.com/api/annonces/?url=%2Facheter%2Fappartement--3-pieces_4-pieces_5-pieces%2F&search_key=list-search&limit=500&tri=baisse_prix&prix_max=400000&surface_min=50&idslieu=100000,100015,100003,100005,100008,100019,100023&tra=V&typIds=201&classifIds=205,6202,6203"

# Output file name
OUTPUT_FILE="data.json"

# Fetch data using curl and save it to a file
curl -s $URL -o $OUTPUT_FILE

# Check if the curl command was successful
if [ $? -eq 0 ]; then
    echo "Data successfully fetched and saved to $OUTPUT_FILE"
else
    echo "Failed to fetch data from $URL"
fi
