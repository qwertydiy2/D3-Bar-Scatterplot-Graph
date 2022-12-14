const charset = d3.select("head").append("meta").attr("charset", "utf-8");
const viewport = d3
  .select("head")
  .append("meta")
  .attr("name", "viewport")
  .attr("width", "device-width");
const title = d3
  .select("head")
  .append("title")
  .attr("id", "title")
  .text("Scatter Plot");
const stylesheet = d3
  .select("head")
  .append("link")
  .attr("href", "style.css")
  .attr("rel", "stylesheet")
  .attr("type", "text/css");
const heading = d3.select("body").append("h1").text("Scatter Plot");
let dataset = [
  {
    Time: "36:50",
    Place: 1,
    Seconds: 2210,
    Name: "Marco Pantani",
    Year: 1995,
    Nationality: "ITA",
    Doping: "Alleged drug use during 1995 due to high hematocrit levels",
    URL: "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use",
  },
  {
    Time: "36:55",
    Place: 2,
    Seconds: 2215,
    Name: "Marco Pantani",
    Year: 1997,
    Nationality: "ITA",
    Doping: "Alleged drug use during 1997 due to high hermatocrit levels",
    URL: "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use",
  },
  {
    Time: "37:15",
    Place: 3,
    Seconds: 2235,
    Name: "Marco Pantani",
    Year: 1994,
    Nationality: "ITA",
    Doping: "Alleged drug use during 1994 due to high hermatocrit levels",
    URL: "https://en.wikipedia.org/wiki/Marco_Pantani#Alleged_drug_use",
  },
  {
    Time: "37:36",
    Place: 4,
    Seconds: 2256,
    Name: "Lance Armstrong",
    Year: 2004,
    Nationality: "USA",
    Doping: "2004 Tour de France title stripped by UCI in 2012",
    URL: "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations",
  },
  {
    Time: "37:42",
    Place: 5,
    Seconds: 2262,
    Name: "Jan Ullrich",
    Year: 1997,
    Nationality: "GER",
    Doping: "Confessed later in his career to doping",
    URL: "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case",
  },
  {
    Time: "38:05",
    Place: 6,
    Seconds: 2285,
    Name: "Lance Armstrong",
    Year: 2001,
    Nationality: "USA",
    Doping: "2001 Tour de France title stripped by UCI in 2012",
    URL: "https://en.wikipedia.org/wiki/History_of_Lance_Armstrong_doping_allegations",
  },
  {
    Time: "38:14",
    Place: 7,
    Seconds: 2294,
    Name: "Miguel Indurain",
    Year: 1995,
    Nationality: "ESP",
    Doping: "1994 Failed test for salbutemol, not a banned drug at that time",
    URL: "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html",
  },
  {
    Time: "38:14",
    Place: 8,
    Seconds: 2294,
    Name: "Alex Z??lle",
    Year: 1995,
    Nationality: "SUI",
    Doping: "Confessed in 1998 to taking EPO",
    URL: "https://en.wikipedia.org/wiki/Alex_Z%C3%BClle#Festina_affair",
  },
  {
    Time: "38:16",
    Place: 9,
    Seconds: 2296,
    Name: "Bjarne Riis",
    Year: 1995,
    Nationality: "DEN",
    Doping: "Alleged drug use during 1995 due to high hermatrocite levels",
    URL: "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations",
  },
  {
    Time: "38:22",
    Place: 10,
    Seconds: 2302,
    Name: "Richard Virenque",
    Year: 1997,
    Nationality: "FRA",
    Doping: "In 2000 confessed to doping during his career",
    URL: "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair",
  },
  {
    Time: "38:36",
    Place: 11,
    Seconds: 2316,
    Name: "Floyd Landis",
    Year: 2006,
    Nationality: "USA",
    Doping: "Stripped of 2006 Tour de France title",
    URL: "https://en.wikipedia.org/wiki/Floyd_Landis_doping_case",
  },
  {
    Time: "38:36",
    Place: 12,
    Seconds: 2316,
    Name: "Andreas Kl??den",
    Year: 2006,
    Nationality: "GER",
    Doping: "Alleged use of illegal blood transfusions in 2006",
    URL: "https://en.wikipedia.org/wiki/Andreas_Kl%C3%B6den#2009_Doping_allegations",
  },
  {
    Time: "38:40",
    Place: 13,
    Seconds: 2320,
    Name: "Jan Ullrich",
    Year: 2004,
    Nationality: "GER",
    Doping: "Confessed later in his career to doping",
    URL: "https://en.wikipedia.org/wiki/Jan_Ullrich#Operaci.C3.B3n_Puerto_doping_case",
  },
  {
    Time: "38:44",
    Place: 14,
    Seconds: 2324,
    Name: "Laurent Madouas",
    Year: 1995,
    Nationality: "FRA",
    Doping: "Tested positive for Salbutemol in 1994, suspended for 1 month",
    URL: "http://www.dopeology.org/incidents/Madouas-positive/",
  },
  {
    Time: "38:55",
    Place: 15,
    Seconds: 2335,
    Name: "Richard Virenque",
    Year: 1994,
    Nationality: "FRA",
    Doping: "In 2000 confessed to doping during his career",
    URL: "https://en.wikipedia.org/wiki/Richard_Virenque#Festina_affair",
  },
  {
    Time: "39:01",
    Place: 16,
    Seconds: 2341,
    Name: "Carlos Sastre",
    Year: 2006,
    Nationality: "ESP",
    Doping: "",
    URL: "",
  },
  {
    Time: "39:09",
    Place: 17,
    Seconds: 2349,
    Name: "Iban Mayo",
    Year: 2003,
    Nationality: "ESP",
    Doping: "Failed doping test in 2007 Tour de France",
    URL: "https://en.wikipedia.org/wiki/Iban_Mayo",
  },
  {
    Time: "39:12",
    Place: 18,
    Seconds: 2352,
    Name: "Andreas Kl??den",
    Year: 2004,
    Nationality: "GER",
    Doping: "Alleged doping during 2006 Tour de France",
    URL: "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case",
  },
  {
    Time: "39:14",
    Place: 19,
    Seconds: 2354,
    Name: "Jose Azevedo",
    Year: 2004,
    Nationality: "POR",
    Doping: "Implicated in the Operaci??n Puerto doping case",
    URL: "https://en.wikipedia.org/wiki/Operaci%C3%B3n_Puerto_doping_case",
  },
  {
    Time: "39:15",
    Place: 20,
    Seconds: 2355,
    Name: "Levi Leipheimer",
    Year: 2006,
    Nationality: "USA",
    Doping:
      "Testified in 2012 to doping during his time with US Postal Service ",
    URL: "http://www.wsj.com/articles/SB10000872396390444799904578048352672452328",
  },
  {
    Time: "39:22",
    Place: 21,
    Seconds: 2362,
    Name: "Francesco Casagrande",
    Year: 1997,
    Nationality: "ITA",
    Doping: "Positive testosterone test in 1998",
    URL: "http://autobus.cyclingnews.com/results/1998/sep98/sep2.shtml",
  },
  {
    Time: "39:23",
    Place: 22,
    Seconds: 2363,
    Name: "Nairo Quintana",
    Year: 2015,
    Nationality: "COL",
    Doping: "",
    URL: "",
  },
  {
    Time: "39:23",
    Place: 23,
    Seconds: 2363,
    Name: "Bjarne Riis",
    Year: 1997,
    Nationality: "DEN",
    Doping: "Alleged drug use during 1995 due to high hermatrocite levels",
    URL: "https://en.wikipedia.org/wiki/Bjarne_Riis#Doping_allegations",
  },
  {
    Time: "39:30",
    Place: 24,
    Seconds: 2370,
    Name: "Miguel Indurain",
    Year: 1994,
    Nationality: "ESP",
    Doping: "1994 Failed test for salbutemol, not a banned drug at that time",
    URL: "http://www.independent.co.uk/sport/drugs-in-sport-indurain-allowed-to-use-banned-drug-1379584.html",
  },
  {
    Time: "39:30",
    Place: 25,
    Seconds: 2370,
    Name: "Luc Leblanc",
    Year: 1994,
    Nationality: "FRA",
    Doping: "Admitted to using epo and amphetimines throughout 1994 ",
    URL: "http://www.dopeology.org/people/Luc_Leblanc/",
  },
  {
    Time: "39:32",
    Place: 26,
    Seconds: 2372,
    Name: "Carlos Sastre",
    Year: 2008,
    Nationality: "ESP",
    Doping: "",
    URL: "",
  },
  {
    Time: "39:37",
    Place: 27,
    Seconds: 2377,
    Name: "Vladimir Poulnikov",
    Year: 1994,
    Nationality: "UKR",
    Doping: "",
    URL: "",
  },
  {
    Time: "39:40",
    Place: 28,
    Seconds: 2380,
    Name: "Giuseppe Guerini",
    Year: 2004,
    Nationality: "ITA",
    Doping: "",
    URL: "",
  },
  {
    Time: "39:41",
    Place: 29,
    Seconds: 2381,
    Name: "Santos Gonzalez",
    Year: 2004,
    Nationality: "ESP",
    Doping: "High Hematocrit during 2005 season, removed by team management",
    URL: "http://www.cyclingnews.com/news/santos-gonzalez-sacked-by-phonak/",
  },
  {
    Time: "39:41",
    Place: 30,
    Seconds: 2381,
    Name: "Vladimir Karpets",
    Year: 2004,
    Nationality: "RUS",
    Doping: "Made payments to Ferrari, but no charges filed",
    URL: "http://www.dopeology.org/incidents/Ferrari-investigation/",
  },
  {
    Time: "39:45",
    Place: 31,
    Seconds: 2385,
    Name: "Fernando Escartin",
    Year: 1995,
    Nationality: "ESP",
    Doping: "Implicated in Giardini Margherita Raid in 1998 as a 'victim' ",
    URL: "http://www.dopeology.org/incidents/Giardini-Margherita-raid-%5bBologna%5d/",
  },
  {
    Time: "39:47",
    Place: 32,
    Seconds: 2387,
    Name: "Denis Menchov",
    Year: 2006,
    Nationality: "RUS",
    Doping: "",
    URL: "",
  },
  {
    Time: "39:47",
    Place: 33,
    Seconds: 2387,
    Name: "Michael Rasmussen",
    Year: 2006,
    Nationality: "DEN",
    Doping: "Admitted to doping with multiple substances 1998-2010",
    URL: "http://www.dopeology.org/people/Michael_Rasmussen/",
  },
  {
    Time: "39:47",
    Place: 34,
    Seconds: 2387,
    Name: "Pietro Caucchioli",
    Year: 2006,
    Nationality: "ITA",
    Doping: "Associated with Mantova investigation, charges dropped",
    URL: "http://www.cyclingnews.com/news/italian-judge-set-to-decide-if-32-named-in-mantova-doping-investigation-should-go-on-trial/",
  },
  {
    Time: "39:50",
    Place: 35,
    Seconds: 2390,
    Name: "Nairo Quintana",
    Year: 2013,
    Nationality: "COL",
    Doping: "",
    URL: "",
  },
];
w = 5000;
const h = 5000;
const padding = 60;
const xScale = d3
  .scaleTime()
  .domain([new Date(1994, 0), new Date(2015, 0)])
  .range([padding, h - padding]);
const yScale = d3
  .scaleTime()
  .domain([
    new Date(0, 0, 0, 0, 0, d3.max(dataset, (d) => d["Seconds"])),
    new Date(0, 0, 0, 0, 0, d3.min(dataset, (d) => d["Seconds"])),
  ])
  .range([padding, w - padding]);
const xAxis = d3.axisBottom(xScale).ticks(d3.timeYear); //.tickFormat(d3.time.format("%Y"))
const yAxis = d3.axisLeft(yScale).tickFormat(d3.timeFormat("%M:%S"));
const svg = d3
  .select("body")
  .append("svg")
  .style("width", w)
  .style("height", h);
svg
  .append("g")
  .attr("transform", "translate(0," + (h - padding) + ")")
  .attr("id", "x-axis")
  .call(xAxis);
svg
  .append("g")
  .attr("transform", "translate(" + padding + ",0)")
  .attr("id", "y-axis")
  .call(yAxis); //;

/*const rect=svg.selectAll("rect")
.data(dataset)
.enter()
.append("rect")
.attr("x",(d, i) => ((i*(h/36))+(60)-(i*((101+(9/11))/36))))
.attr("y",(d) => h-((((h*(d[1]/(d3.max(dataset, (d) => d[1])))+60)))/5000)*4880)
.attr("height",(d) => ((h*(d[1]/(d3.max(dataset, (d) => d[1]))))/5000)*4880)
.attr("width",(h/268.4))
.attr("class","bar")
.attr("data-date",d => d[0])
.attr("data-gdp",d => d[1])
rect.append("title")
.text(d => d[1])
.attr("id","tooltip")
.attr("data-date",d => d[0])*/
svg.append("text").text("YEAR").attr("x", "2500").attr("y", "4970");
svg.append("text").text("T").attr("x", "30").attr("y", "2395");
svg.append("text").text("I").attr("x", "30").attr("y", "2410");
svg.append("text").text("M").attr("x", "30").attr("y", "2425");
svg.append("text").text("E").attr("x", "30").attr("y", "2440");
svg.append("text").text("I").attr("x", "30").attr("y", "2470");
svg.append("text").text("N").attr("x", "30").attr("y", "2485");
svg.append("text").text("M").attr("x", "30").attr("y", "2515");
svg.append("text").text("I").attr("x", "30").attr("y", "2530");
svg.append("text").text("N").attr("x", "30").attr("y", "2545");
svg.append("text").text("U").attr("x", "30").attr("y", "2560");
svg.append("text").text("T").attr("x", "30").attr("y", "2575");
svg.append("text").text("E").attr("x", "30").attr("y", "2590");
svg.append("text").text("S").attr("x", "30").attr("y", "2605");
const circle = svg
  .selectAll("circle")
  .data(dataset)
  .enter()
  .append("circle")
  .attr("cx", (d) => xScale(new Date(d["Year"], 0)))
  .attr("cy", (d) => yScale(new Date(0, 0, 0, 0, 0, d["Seconds"])))
  .attr("r", 10)
  .attr("class", "dot")
  .attr("data-xvalue", (d) => xScale(new Date(d["Year"], 0)))
  .attr("data-yvalue", (d) => yScale(new Date(0, 0, 0, 0, 0, d["Seconds"])))
  .style("fill", (d) => {
    if (d["Doping"] == false) {
      return 'SpringGreen'
    } else {
      return 'Red'
    }
  });
const ms = d3.timeFormat("%M:%S")
const y = d3.timeFormat("%Y")
circle.append("title")
.text((d) => ms(new Date(0, 0, 0, 0, 0, d["Seconds"])))
.attr("id","tooltip")
.attr("data-year", (d) => xScale(new Date(d["Year"], 0)))
const legend = d3.select("body")
.append("div")
.attr("id","legend")
legend.append("p")
.attr("class","center")
.text("Key:")
legend.append("p")
.text("Doping")
.attr("id","red")
legend.append("p")
.text("No Doping")
.attr("id","spring")