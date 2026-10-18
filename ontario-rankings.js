(function () {
  "use strict";
  // rank rating: Name,City; ... (~P = PDSB school, ~D = DPCDSB school). Source: Fraser Institute 2025 Report Card (2023/24 results).
  const DATA = `1 10.0:St. Robert,Thornhill;St. Therese of Lisieux,Richmond Hill;St. Augustine,Markham;St Michael's Choir,Toronto
5 9.7:Ursula Franklin,Toronto
6 9.5:Pierre Elliott Trudeau,Markham
7 9.4:Olive Grove High School,Mississauga
8 9.3:Iroquois Ridge,Oakville;Cardinal Carter-Arts,Toronto;Abbey Park,Oakville;Gaétan Gervais,Oakville
12 9.2:Oakville Trafalgar,Oakville;Bayview,Richmond Hill;Bloor,Toronto
15 9.1:Leaside,Toronto;Lawrence Park,Toronto;Malvern,Toronto
18 9.0:Markville,Markham;Unionville,Unionville;Humberside,Toronto;Collège Français,Toronto;York Mills,Toronto
23 8.9:Colonel By,Gloucester;Bur Oak,Markham;Earl Haig,Toronto;A Y Jackson,Toronto;Thornlea,Thornhill;ISNA High School,Mississauga
29 8.8:Milliken Mills,Unionville;White Oaks,Oakville;Toronto Ouest,Toronto;John Fraser SS,Mississauga~P
33 8.7:London Central,London;William Lyon Mackenzie,Toronto;Sir John A Macdonald,Waterloo;Riverdale,Toronto;Bishop Allen,Toronto;Richview,Toronto
39 8.6:Earl of March,Kanata;Father John Redmond,Toronto;Lo-Ellen Park,Sudbury
42 8.5:Garth Webb,Oakville;Father Michael McGivney,Markham;Newmarket,Newmarket;Alexander MacKenzie,Richmond Hill
46 8.4:North Toronto,Toronto;Aurora,Aurora;Agincourt,Toronto;Donald A. Wilson,Whitby;Cardinal Carter,Leamington;David Saint-Jacques,Kitchener
52 8.3:Richmond Hill,Richmond Hill;Bill Hogarth,Markham;West Carleton,Dunrobin;Dr G W Williams,Aurora;Nepean,Ottawa;Bill Crothers,Unionville;Markham,Markham;Richmond Green,Richmond Hill;Erin,Erin;St.-Trinité,Oakville;Norval-Morrisseau,Richmond Hill;Lockerby,Sudbury;The Woodlands School,Mississauga~P
65 8.2:Etobicoke-Arts,Toronto;St. Thomas of Villanova,LaSalle;Merivale,Nepean;Guelph,Guelph;Bishop Macdonell,Guelph;Stephen Lewis,Thornhill;Sacred Heart,Stittsville;Bishop Paul Francis Reding,Milton;Nelson,Burlington;Thornhill,Thornhill;Northern,Toronto;St. Joseph,Mississauga~D;St. Thomas Aquinas,Oakville;Jeanne-Lajoie,Pembroke
79 8.1:Lisgar,Ottawa;St. Ignatius of Loyola,Oakville;Vaughan,Thornhill;Thomas A Blakelock,Oakville;Renaissance,Aurora;Corpus Christi,Burlington;Etobicoke,Toronto
86 8.0:Centennial,Guelph;St. Francis Xavier,Mississauga~D;Rosedale Heights-Arts,Toronto;Milton,Milton;Dr. Frank J. Hayden,Burlington;St. David,Waterloo;Oakridge,London;Monarch Park,Toronto;St. Paul,Niagara Falls
95 7.9:Ange-Gabriel,Brockville;All Saints,Kanata;St. Marcellinus,Mississauga~D;Tecumseh Vista,Tecumseh;Westmount,Thornhill;St. Benedict,Sudbury;W A Porter,Toronto;Dr Norman Bethune,Toronto;Jean Vanier,Richmond Hill;Garneau,Gloucester;St. Brother André,Markham;All Saints,Whitby;Anderson,Whitby;Al-Manarat Islamic School,Mississauga;Canterbury HS,Ottawa;Streetsville SS,Mississauga~P
111 7.8:Eden,St Catharines;A.Y. Jackson,Kanata;St. Michael,Kemptville;Jeunes sans frontières,Brampton;St. Thomas Aquinas,London;Pickering,Ajax;Roméo Dallaire,Barrie;ÉSC Pape-François,Stouffville
119 7.7:St.-Frère-André,Toronto;Notre Dame,Toronto;John F Ross,Guelph;St. Paul,Mississauga~D;St. Aloysius Gonzaga,Mississauga~D;Marc-Garneau,Trenton;Belle River,Belle River;Neil McNeil,Toronto;Assumption,Burlington;E L Crossley,Fonthill;Georgetown,Georgetown
130 7.6:Maple,Maple;Aldershot,Burlington;Cardinal Carter,Aurora;Bishop Tonnos,Ancaster;A N Myer,Niagara Falls;Holy Names,Windsor;Mer Bleue,Orléans;Assumption,Windsor;Loretto Abbey,Toronto;Father Bressani,Woodbridge;Highland,Dundas;Lorne Park SS,Mississauga~P
142 7.5:Paul-Desmarais,Ottawa;St. Joseph,Nepean;Harbord,Toronto;Glebe,Ottawa;Cameron Heights,Kitchener;Béatrice-Desloges,Orléans;Forest Hill,Toronto;St. Francis,St Catharines
150 7.4:Middlefield,Markham;St. Anne,Tecumseh;Burlington Central,Burlington;Sir Winston Churchill,St Catharines;Brooklin,Whitby;Kitchener Waterloo,Kitchener;Cardinal Newman,Stoney Creek;de Casselman,Casselman
158 7.3:Holy Trinity,Kanata;Marie-Rivier,Kingston;Westmount,Hamilton;St. Mark,Manotick;St. Joseph's,Renfrew;A B Lucas,London;St.-Famille,Mississauga;Dunbarton,Pickering;R H King,Toronto;Centre Wellington,Fergus;Senator O'Connor,Toronto;Sinclair,Whitby;Sydenham,Sydenham;St. Marys,St Marys;Northern,Sarnia;Le Sommet,Hawkesbury;Bishop Smith,Pembroke;North Dundas,Chesterville;Holy Cross,St Catharines;Almonte,Almonte
178 7.2:John McCrae,Nepean;Holy Name of Mary,Brampton~D;Mary Ward,Toronto;St. Joseph's,Toronto;Mother Teresa,Nepean;Sandwich,LaSalle;Stouffville,Stouffville;St. Elizabeth,Thornhill;Père-René-de-Galinée,Cambridge;J Clarke Richardson,Ajax;Marshall McLuhan,Toronto;St. Mary's,Hamilton;Sacred Heart,Newmarket;St. Mary's,Brockville;Governor Simcoe,St Catharines;Gabriel-Dumont,London;Francis Libermann,Toronto;Étienne-Brûlé,Toronto;Lambton Central,Petrolia;Mayfield SS,Caledon~P;North Park SS,Brampton~P;Port Credit SS,Mississauga~P;West Niagara Secondary,Lincoln
201 7.1:Tommy Douglas,Woodbridge;Holy Trinity,Oakville;Mother Teresa,London;Pierre-Savard,Nepean;Michael Power/St. Joseph,Toronto;Blessed Trinity,Grimsby;Samuel-Genest,Ottawa;St. Michael,Niagara Falls;St. Patrick,Toronto;Notre Dame,Ajax;St. Joseph's,Windsor;St. Maximilian Kolbe,Aurora;St. Mary,Pickering;Albert Campbell,Toronto;St. Mary,Cobourg;Kincardine,Kincardine;Georges-P-Vanier,Hamilton;Cawthra Park SS,Mississauga~P;Turner Fenton SS,Brampton~P
220 7.0:Marymount,Sudbury;Longfields Davidson Heights,Nepean;Christ the King,Georgetown;Eastview,Barrie;Loyola,Mississauga~D;Bluevale,Waterloo;Ancaster,Ancaster;Don Mills,Toronto;St. Michael,Stratford;Frontenac,Kingston;Glengarry,Alexandria;Holy Cross,Kingston;Sir Oliver Mowat,Toronto;Barrie North,Barrie;Acton,Acton;Hawkesbury,Hawkesbury;Brampton Centennial SS,Brampton~P;Mille-Iles,Kingston
238 6.9:Vincent Massey,Windsor;St. Matthew,Orléans;Cardinal Ambrozic,Brampton~D;Maxwell Heights,Oshawa;Our Lady of Mount Carmel,Mississauga~D;Brockville,Brockville;Resurrection,Kitchener;Martingrove,Toronto;Regiopolis/Notre-Dame,Kingston;St. Josephs Morrow Park,Toronto;Assumption,Brantford;Sacred Heart,Walkerton;Georgian Bay,Meaford;St. John,Perth;Gravenhurst,Gravenhurst;Odyssée,North Bay
254 6.8:Maurice-Lapointe,Kanata;Uxbridge,Uxbridge;Henry Street,Whitby;Charlottenburgh and Lancaster,Williamstown;Notre Dame,Carleton Place;Atikokan,Atikokan;Craig Kielburger,Milton;Franco-Ouest,Nepean;Notre Dame,Brampton~D;St. Andre Bessette,London;Embrun,Embrun;St. Benedict,Cambridge;Pickering,Pickering;Western,Toronto;Innisdale,Barrie;St. Charles,Sudbury;Wellington Heights,Mount Forest;Thorold,Thorold;Confédération,Welland;Glenforest SS,Mississauga~P;Harold M. Brathwaite,Brampton~P
275 6.7:South Carleton,Richmond;St. Francis Xavier,Gloucester;Northview Heights,Toronto;Emily Carr,Woodbridge;Bracebridge and Muskoka Lakes,Bracebridge;Arnprior,Arnprior;St. Peter's,Peterborough;Laura Secord,St Catharines;King City,King City;Westdale,Hamilton;Pope John Paul II,Toronto;Centennial,Welland;Franco-Cité,Ottawa;Central Commerce,Toronto;Georges Vanier,Toronto;St. Theresa,Belleville;Elmvale,Elmvale;Chinguacousy SS,Brampton~P;Mississauga Secondary,Mississauga~P
294 6.6:Louis-Riel,Gloucester;St.-Charles-Garnier,Whitby;St. John's,Brantford;St. Ignatius,Thunder Bay;Immaculata,Ottawa;Sir William Mulock,Newmarket;Ursuline (The Pines),Chatham;Victoria Park,Toronto;Nicholson,Belleville;Port Perry,Port Perry;Glenview Park,Cambridge;Bayridge,Kingston;Our Lady Of the Lake C.H.S.,Keswick;Jordan Christian,Lincoln;Humberview Secondary,Bolton~P;Peninsula Shores District,Wiarton;Maple Ridge,Barrie
311 6.5:Notre Dame,Burlington;Gisèle-Lalonde,Orléans;Jean Vanier,Milton;St. Peter,Orléans;Collingwood,Collingwood;Owen Sound,Owen Sound;St. Joseph's,St Thomas;M M Robinson,Burlington;Parkdale,Toronto;Jean Vanier,Collingwood;Denis Morris,St Catharines;de-Lamothe-Cadillac,Windsor;Hagersville,Hagersville;Port Colborne,Port Colborne;Elsie MacGill Secondary,Milton
326 6.4:Elmira,Elmira;Father Leo J Austin,Whitby;R. S. McLaughlin,Oshawa;Bowmanville,Bowmanville;Huntsville,Huntsville;Nouvelle-Alliance,Barrie;Gananoque,Gananoque;Lakeshore,Port Colborne;Central Huron,Clinton;Rockland,Rockland;Kateri Tekakwitha Catholic,Milton;Pierre-de-Blois,Nepean
338 6.3:De La Salle,Ottawa;Saugeen,Port Elgin;Medway,Arva;Woodbridge,Woodbridge;Huron Heights,Kitchener;St. Pius X,Ottawa;Westlane,Niagara Falls;North Park,Brantford;Silverthorn,Toronto;L'Académie de la Seigneurie,Casselman;Castlebrooke Secondary,Brampton~P
349 6.2:St. Thomas Aquinas,Russell;St. Edmund Campion,Brampton~D;St. Paul,Ottawa;Waterloo,Waterloo;Lord Dorchester,Dorchester;Monseigneur-de-Charbonnel,Toronto;West Humber,Toronto;Sir Wilfrid Laurier,Toronto;Notre Dame,Welland;Brebeuf,Toronto;Cardinal Newman,Toronto;Simcoe,Simcoe;Iona SS,Mississauga~D;Erindale SS,Mississauga~P;ÉS de la Rivière des Français,Noëlville;Kingston,Kingston;Sandalwood Heights,Brampton~P;Superior CVI,Thunder Bay
367 6.1:Sir Robert Borden,Nepean;Sir John A Macdonald,Toronto;Sir Wilfrid Laurier,Orléans;MacKenzie,Deep River;Grand River,Kitchener;St. Marguerite d'Youville,Brampton~D;Walkerville,Windsor;Monsignor Doyle,Cambridge;St. Mary's,Kitchener;St. Joseph's,Cornwall;Holy Cross,Woodbridge;Holy Cross,Peterborough;Banting Memorial,Alliston;St. Stephen's,Bowmanville;DSBN Academy,St Catharines;St. Jean de Brebeuf,Woodbridge;Huron Heights,Newmarket;St.-François-Xavier,Sarnia;Parkside,St Thomas;St. Thomas More,Hamilton;St.-Marie,New Liskeard;Hammarskjold HS,Thunder Bay;Meadowvale SS,Mississauga~P
390 6.0:Waterdown,Waterdown;St. Patrick's,Sarnia;Riverside,Windsor;Thousand Islands,Brockville;St. Joan of Arc,Maple;Norwell,Palmerston;Fenelon Falls,Fenelon Falls;John Diefenbaker,Hanover;Philippe-Lamarche,Toronto;Louise Arbour S.S.,Brampton~P;Stephen Lewis SS,Mississauga~P
401 5.9:Philip Pocock,Mississauga~D;Cairine Wilson,Ottawa;St. Joan of Arc,Mississauga~D;E.J.Lajeunesse,Windsor;Sir Frederick Banting,London;Archbishop Denis O'Connor,Ajax;Osgoode Township,Metcalfe;Waterloo-Oxford,Baden;Preston,Cambridge;Hearst,Hearst;Cardinal Leger,Brampton~D;St. James,Guelph;Bishop Ryan,Hamilton;Galt,Cambridge;St. Joan of Arc,Barrie;James Cardinal McGuigan,Toronto;Lindsay,Lindsay;Valour,Petawawa;Cayuga,Cayuga;Newtonbrook,Toronto;North Star High School,Amherstburg
422 5.8:Kingsville,Kingsville;Bradford,Bradford;Holy Trinity,Simcoe;North Grenville,Kemptville;F J Brennan,Windsor;Plantagenet,Plantagenet;Woodstock,Woodstock;Danforth,Toronto;St. Thomas Aquinas,Kenora;La Salle,Kingston;South Huron,Exeter;St. Mary's,Owen Sound;Holy Cross,Strathroy;Eastwood,Kitchener;Grey Highlands,Flesherton;Windsor Islamic,Windsor;Bruce Peninsula,Lion's Head;Central Peel SS,Brampton~P
440 5.7:St. Paul,Trenton;Courtice,Courtice;O'Neill,Oshawa;Carleton Place,Carleton Place;Renfrew,Renfrew;East Northumberland,Brighton;Bayside,Belleville;Jacob Hespeler,Cambridge;Loretto,Toronto;Crestwood,Peterborough;Sudbury,Sudbury;Centre Hastings,Madoc;Russel High,Russell
453 5.6:Dr John M Denison,Newmarket;Vankleek Hill,Vankleek Hill;Cobourg,Cobourg;Essex,Essex;Orangeville,Orangeville;I E Weldon,Lindsay;Southwood,Cambridge;St. Michael,Bolton~D;Goderich,Goderich;Central Elgin,St Thomas;Catholic Central,London;Woburn,Toronto;St. Anne's,Clinton;de la Verendrye,Thunder Bay;Monsignor Paul Dwyer,Oshawa;Dryden,Dryden;North Lambton,Forest;Saunders,London;Loyalist,Kingston;Walkerton,Walkerton;Franco-Cité,Sturgeon Falls;Port Hope,Port Hope;Monsignor John Pereyma,Oshawa;Heart Lake SS,Brampton~P;Westgate C & VI,Thunder Bay
478 5.5:St. Roch,Brampton~D;Monseigneur-Bruyère,London;Westside,Orangeville;Orillia,Orillia;Greater Fort Erie,Fort Erie;Timiskaming District,New Liskeard;Strathroy District,Strathroy;West Ferris,North Bay;East York,Toronto;St. Joseph's,Barrie;Korah,Sault Ste. Marie;Chippewa,North Bay;Great Lakes,Sarnia;Northern,Sturgeon Falls;West Elgin,West Lorne;Safa & Marwa Islamic,Mississauga;La Renaissance,Espanola;Fletcher's Meadow SS,Brampton~P;Rick Hansen SS,Mississauga~P
497 5.4:Mitchell,Mitchell;Robert F Hall,Caledon East~D;Holy Trinity,Courtice;Ajax,Ajax;Stratford District,Stratford;Hillcrest,Ottawa;St. Joseph-Scollard Hall,North Bay;St. Dominic,Bracebridge;Centre Dufferin,Shelburne;Monsignor Percy Johnson,Toronto;Centennial,Belleville;l'Essor,Tecumseh;H B Beal,London;Applewood Heights SS,Mississauga~P;Jean Augustine,Brampton~P;Peel Virtual Secondary School,Brampton~P
513 5.3:Orchard Park,Stoney Creek;St. Augustine,Brampton~D;Wexford Collegiate-Arts,Toronto;London South,London;Saltfleet,Stoney Creek;Adam Scott,Peterborough;St. Patrick,Thunder Bay;Brantford,Brantford;Haliburton Highland,Haliburton;Ingersoll District,Ingersoll;L'Amoreaux,Toronto;Sir Wilfrid Laurier,London;Lambton Kent,Dresden;O'Gorman,Timmins;Georgian Bay District,Midland;Stamford,Niagara Falls;Waterford,Waterford;Granite Ridge Education Centre,Sharbot Lake;TDSB Virtual Secondary,Toronto
532 5.2:Langstaff,Richmond Hill;Listowel,Listowel;L'Escale,Rockland;Bear Creek,Barrie;Holy Trinity,Bradford;St. Mary's,Sault Ste. Marie;St. Mary's,Woodstock;Lively,Lively;Woodroffe,Ottawa;St. Theresa's,Midland;St. Francis Xavier,Hammond;Saint-Joseph,Wawa;Minto,Ottawa
545 5.1:Chaminade,Toronto;Paris,Paris;Lester B Pearson,Toronto;Le Relais,Alexandria;Jean-Vanier,Welland;Roland Michener,South Porcupine;ÉS Château Jeunesse,Longlac
552 5.0:Rideau,Elgin;Opeongo,Douglas;Kenner,Peterborough;Campbellford,Campbellford;Nottawasaga Pines,Angus;Nouveau Regard - Jeunesse Nord,Cochrane;Bramalea SS,Brampton~P
559 4.9:St. Martin,Mississauga~D;Pine Ridge,Pickering;Clarington Central,Bowmanville;Ascension of Our Lord,Mississauga~D;Nantyr Shores,Innisfil;St. Mary's,Toronto;Lakeshore,Toronto;Forest Heights,Kitchener;Twin Lakes,Orillia;Cedarbrae,Toronto;Stayner,Stayner;Thistletown,Toronto;West Hill,Toronto;Notre-Dame,Woodstock
573 4.8:Holy Trinity,Cornwall;St. Thomas Aquinas,Lindsay;Le Caron,Penetanguishene;Huron Park,Woodstock;Lester B Pearson,Gloucester;McKinnon Park,Caledonia;Blenheim,Blenheim;Lasalle,Sudbury;Lincoln M. Alexander S.S.,Mississauga~P
582 4.7:St. Jean de Brebeuf,Hamilton;Glendale,Tillsonburg;F E Madill,Wingham;Tilbury,Tilbury;Jean Vanier,Toronto;Manitoulin,M'Chigeeng;St. Basil The Great,Toronto;Catholic Central,Windsor;David Suzuki Secondary,Brampton~P
591 4.6:Our Lady of Lourdes,Guelph;Clarke,Newcastle;St. Patrick's,Ottawa;St. Peter's,Barrie;Notre Dame,Ottawa;Madonna,Toronto;Blessed Mother Teresa,Toronto;East Elgin,Aylmer;Glendale,Hamilton;Fellowes,Pembroke;Cathedral,Hamilton;Oakwood,Toronto;Clarkson SS,Mississauga~P;Echo du Nord,Kapuskasing
605 4.5:Bell,Nepean;Perth and District,Perth;Chatham-Kent,Chatham;St. Thomas Aquinas,Tottenham;Thomas A Stewart,Peterborough;Keswick,Keswick;Brock,Cannington;Collège Notre-Dame,Sudbury;South Grenville,Prescott;Valley Heights,Langton;Wallaceburg,Wallaceburg;Eastdale,Welland;Archbishop Romero,Toronto;Kirkland Lake District Composite,Kirkland Lake;North Middlesex DHS,Parkhill
620 4.4:John Cabot,Mississauga~D;L'Héritage,Cornwall;Bishop Alexander Carter,Hanmer;Stephen Leacock,Toronto;l'Horizon,Val Caron;Sherwood,Hamilton;Father Henry Carr,Toronto;Tagwi,Avonmore;Theriault,Timmins;David and Mary Thomson,Toronto;John Polanyi,Toronto;St. Catharines,St Catharines;ÉS catholique l'Envolée du Nord,Kirkland Lake
633 4.3:Leamington,Leamington;Madawaska Valley,Barry's Bay;La Citadelle,Cornwall;Bishop Marrocco/Thomas Merton,Toronto;Napanee,Napanee;Birchmount Park,Toronto;Central Algoma,Desbarats;Notre-Dame-du-Sault,Sault Ste. Marie
641 4.2:Patrick Fogarty,Orillia;St. Thomas Aquinas,Brampton~D;Eastdale,Oshawa;Mère-Teresa,Hamilton;Moira,Belleville;Rainy River,Rainy River;Central,Toronto;ÉS de Pain Court,Pain Court
649 4.1:Superior Heights,Sault Ste. Marie;Jarvis,Toronto;Regina Mundi,London;Sutton,Sutton West;W C Eaket,Blind River
654 4.0:Father Michael Goetz,Mississauga~D;Brookfield,Ottawa;Confederation,Val Caron;John Paul II,London;Glencoe,Glencoe;Runnymede,Toronto
660 3.9:Cité des Jeunes,Kapuskasing;Delhi,Delhi;Parry Sound,Parry Sound;Fort Frances,Fort Frances;F J McElligott,Mattawa;Athens,Athens
666 3.8:Marc Garneau,Toronto;Macdonald-Cartier,Sudbury;Ernestown,Odessa;W F Herman,Windsor;G L Roberts,Oshawa;Sir Allan MacNab,Hamilton
672 3.7:Englehart,Englehart;Timmins,Timmins;Smiths Falls,Smiths Falls;Clarke Road,London;Chelmsford Valley,Chelmsford;College Avenue,Woodstock
678 3.6:Deslauriers,Nepean;North Albion,Toronto;Seaway,Iroquois;Nora Frances Henderson,Hamilton
682 3.5:North Hastings,Bancroft;Marathon,Marathon;Michipicoten,Wawa;White Pines,Sault Ste. Marie;Downsview,Toronto;Nipigon Red Rock,Red Rock;North Addington,Cloyne
689 3.4:Beaver Brae,Kenora;Dante Alighieri,Toronto;Winston Churchill,Toronto;Almaguin Highlands,South River;Jeunesse-Nord,Blind River
694 3.3:Gloucester,Gloucester;Chapleau HS,Chapleau;Thomas L Kennedy SS,Mississauga~P
697 3.2:John McGregor,Chatham;Red Lake,Red Lake;Lake Superior,Terrace Bay;Montcalm,London;Cochrane,Cochrane
702 3.1:Algonquin,North Bay;Cornwall,Cornwall
704 3.0:Weston,Toronto;Kipling,Toronto
706 2.9:York Memorial,Toronto;C W Jefferys,Toronto;ÉS Northern,Sturgeon Falls
709 2.8:Westminster,London;Prince Edward,Picton;Emery,Toronto;Arthur Voaden,St Thomas;Kapuskasing DHS,Kapuskasing
714 2.7:É.S.C. L'Alliance,Iroquois Falls
715 2.6:Hon W C Kennedy,Windsor
716 2.5:Elliot Lake,Elliot Lake;Ridgemont,Ottawa;Champlain,Chelmsford;Pauline Johnson,Brantford
720 2.4:Sacré-Coeur,Sudbury;Norwood,Norwood;Dunnville,Dunnville;Sir Winston Churchill,Hamilton
724 2.3:George S Henry,Toronto
725 2.2:Geraldton,Geraldton;Bernie Custis,Hamilton
727 2.1:St. Lawrence,Cornwall;Queen Elizabeth,Sioux Lookout
729 2.0:Trenton,Trenton
730 1.9:Espanola,Espanola
731 1.8:Hanmer,Hanmer
732 1.7:Ridgetown,Ridgetown
733 1.6:Westview Centennial,Toronto
734 1.4:Iroquois Falls,Iroquois Falls
735 1.3:Westview Freedom Academy,Windsor
736 1.0:Sir Guy Carleton,Nepean
737 0.9:St. Luke Catholic,Smiths Falls;West Credit SS,Mississauga~P
739 0.7:Judith Nyman,Brampton~P
740 0.4:Northern Lights,Moosonee
741 0.3:Ottawa Technical,Ottawa
742 0.0:College Heights,Guelph;Vezina Secondary School,Attawapiskat;St Matthew Catholic,Cornwall;St Luke Catholic Learning Centre,Maple;l'Alliance,Iroquois Falls;Manitouwadge,Manitouwadge`;

  const esc = s => String(s).replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const rows = [];
  DATA.split("\n").forEach(line => {
    const i = line.indexOf(":"), [k, r] = line.slice(0, i).split(" ");
    line.slice(i + 1).split(";").forEach(e => {
      let b = ""; if (/~[PD]$/.test(e)) { b = e.slice(-1); e = e.slice(0, -2); }
      const j = e.lastIndexOf(",");
      rows.push({ k: +k, r: +r, n: e.slice(0, j), c: e.slice(j + 1), b });
    });
  });

  const root = document.getElementById("guide-ontario");
  if (!root) return;
  root.innerHTML = `<h2 class="career-title">All Ontario secondary schools by rank</h2>
<p class="sub">All ${rows.length} schools in the Fraser Institute’s 2025 Report Card on Ontario’s Secondary Schools (2023/24 results), from rank 1 to 742. Ties share a rank, so some numbers are skipped. Peel board schools are highlighted.</p>
<p class="note">The rating covers only Grade 9 math and literacy test results, not programs, arts, sports or school culture. Several names repeat across Ontario, so use the city to tell them apart. Unofficial copy: the original table is in the <a href="https://www.fraserinstitute.org/sites/default/files/2025-11/ontario-secondary-school-rankings-2025_0.pdf">Fraser Institute PDF</a>. Last updated: <time datetime="2026-10-18">18 October 2026</time>.</p>
<div class="sg-card"><div class="sg-controls"><label class="sg-field">Search schools or cities<input class="sg-in" type="search" data-q></label>
<label class="sg-field">Show<select class="sg-in" data-b><option value="">All Ontario schools</option><option value="P">PDSB schools only</option><option value="D">DPCDSB schools only</option><option value="PD">PDSB and DPCDSB schools</option></select></label></div>
<p class="note" aria-live="polite" data-n></p>
<div class="sg-scroll sg-tall" tabindex="0" role="region" aria-label="Ontario rankings table, scrolls sideways on small screens"><table class="sg-table"><thead><tr><th scope="col">Ontario rank</th><th scope="col">School</th><th scope="col">City</th><th scope="col">Rating out of 10</th><th scope="col">Peel board</th></tr></thead><tbody></tbody></table></div></div>`;
  const q = root.querySelector("[data-q]"), f = root.querySelector("[data-b]"), tb = root.querySelector("tbody"), n = root.querySelector("[data-n]");
  const BN = { P: "PDSB", D: "DPCDSB" };
  function update() {
    const t = q.value.trim().toLowerCase(), bf = f.value;
    const list = rows.filter(s => (!bf || bf.includes(s.b) && s.b) && (s.n + " " + s.c).toLowerCase().includes(t));
    n.textContent = list.length + " of " + rows.length + " schools shown.";
    tb.innerHTML = list.map(s => `<tr${s.b ? ' class="sg-peel"' : ""}><td>${s.k}</td><th scope="row">${esc(s.n)}</th><td>${esc(s.c)}</td><td><span class="sg-bar" style="--v:${s.r * 10}%"></span> <strong>${s.r.toFixed(1)}</strong></td><td>${s.b ? `<span class="sg-pill">${BN[s.b]}</span>` : ""}</td></tr>`).join("");
  }
  q.addEventListener("input", update); f.addEventListener("input", update); update();
})();
