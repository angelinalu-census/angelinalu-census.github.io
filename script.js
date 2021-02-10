src="d3.min.js?v=3.2.8"
        type="text/javascript";
        charset="utf-8"
            d3.text("T:\tab6\spectabs\prod\st109\2014thru2018_orig\ftp\EEO_Tables_By_Geographic_Area\Core_Based_Statistical_Areas\EEOALL1R_310.csv", function(data) {
                var parsedCSV = d3.csv.parseRows(data);

                var container = d3.select("body")
                    .append("table")

                    .selectAll("tr")
                        .data(parsedCSV).enter()
                        .append("tr")

                    .selectAll("td")
                        .data(function(d) { return d; }).enter()
                        .append("td")
                        .text(function(d) { return d; });
            });
