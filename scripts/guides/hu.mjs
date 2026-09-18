// Magyar útmutatók. A kulcsok a ui.mjs GUIDE_SLUGS slugjai.
export default {
  'tech-stack-for-agency': {
    title: 'Tech stack ügynökségnek: mire van szükség 2026-ban',
    seoTitle: 'Tech stack ügynökségnek — a teljes lista | Sikra',
    desc: 'Tech stack ügynökségnek: domain, weboldal, céges e-mail, CRM, adatbázis, hírlevél, űrlapok, online fizetés és analitika. Mit válassz és milyen sorrendben.',
    lead: 'Egy ügynökség technológiai stackje azoknak a szolgáltatásoknak az összessége, amelyeken az értékesítés, az ügyfélmunka és a pénzügyek futnak. Az alábbiakban a minimális készlet, amelyet marketing-, kreatív, toborzó és tanácsadó ügynökségeknek állítunk össze — és a beállítás sorrendje.',
    sections: [
      {
        h: 'Miből áll egy ügynökség tech stackje',
        p: ['Minden ügynökségnek, résterülettől függetlenül, ugyanarra a nyolc rétegre van szüksége. Az eszközök cserélhetők, de ha egy réteg hiányzik, az mindig kiderül — elveszett érdeklődőkben, spambe kerülő levelekben vagy kézi fizetésegyeztetésben.'],
        list: [
          'Domain és DNS — az ügynökség címe és a rekordok kezelése (Cloudflare, domainregisztrátor).',
          'Weboldal — referenciák és ajánlatkérő űrlap (Webflow, WordPress, Framer vagy saját kód Vercelen).',
          'Céges e-mail — nev@ugynokseg fiókok SPF, DKIM és DMARC beállítással (Google Workspace, Microsoft 365, Zoho Mail).',
          'CRM — értékesítési tölcsér, ügyféladatlapok és feladatok (HubSpot, Pipedrive, Kommo, Bitrix24).',
          'Adatbázis — ügyfelek, projektek és előzmények egy helyen (PostgreSQL, Supabase, Airtable).',
          'Hírlevél — kampányok és automatikus levélsorozatok (Brevo, Mailchimp).',
          'Űrlapok és fizetés — a weboldalról érkező kérések egyenesen a CRM-be, számlázás és online fizetés (Stripe, Barion, SimplePay).',
          'Analitika — honnan jönnek az ügyfelek és mi működik (Google Analytics 4, Search Console).',
        ],
      },
      {
        h: 'Milyen sorrendben érdemes beállítani',
        p: ['A sorrend számít: az e-mail a domaintől függ, az űrlapok a CRM-től, az analitika a weboldaltól. Mi ebben a sorrendben építjük fel az ügynökség stackjét:'],
        list: [
          'Domain és DNS megbízható szolgáltatónál.',
          'Céges e-mail SPF, DKIM és DMARC rekordokkal — még az első ügyféllevél előtt.',
          'CRM a szolgáltatásaidhoz igazított tölcsérszakaszokkal.',
          'Weboldal és űrlapok, amelyek a kéréseket közvetlenül a CRM-be írják, és e-mailben is elküldik.',
          'Online fizetés, számlázás és automatikus nyugták.',
          'Hírlevél és analitika — amikor már van kinek írni és mit mérni.',
        ],
      },
      {
        h: 'Gyakori hibák a stack kiválasztásakor',
        list: [
          'A domain és az eszközök regisztrálása egy munkatárs vagy alvállalkozó személyes fiókjára — a hozzáférés visszaszerzése hónapokig tarthat.',
          'Ügyfelek kezelése táblázatokban és chatben CRM helyett — elvesznek a kérések, és az előzmények a munkatárssal együtt távoznak.',
          'Hírlevél küldése a fő domainről DKIM és DMARC nélkül — a napi levelek is spambe kerülnek.',
          'Mindent-egyben rendszer vásárlása az első napon: egy 10%-ban használt óriásplatform drágább és bonyolultabb, mint néhány összekötött egyszerű eszköz.',
          'Az eszközök össze nem kötése: ha az űrlap, a CRM és a fizetés külön él, a csapat válik „kézi integrációvá”.',
        ],
      },
      {
        h: 'Mennyibe kerül egy ügynökség tech stackje',
        p: ['Egy 3–10 fős csapatnál az előfizetések jellemzően havi néhány tucat és pár száz dollár között mozognak: az e-mail felhasználónként, a CRM licencenként, a hírlevél a lista mérete szerint számláz. A legdrágább nem az előfizetés, hanem a beállításra és összekötésre fordított idő, ezért minimális stackkel indulunk, és a csomagokat a növekedéssel bővítjük.'],
      },
      {
        h: 'Hogyan építi fel a Sikra az ügynökség stackjét',
        p: ['A szolgáltatásaidhoz és a költségkeretedhez választunk eszközöket, mindent az ügynökség saját fiókjaira regisztrálunk, beállítjuk a domaint, az e-mailt, a CRM-et, az adatbázist, az űrlapokat, a fizetést és a hírleveleket, összekötjük őket, és minden hozzáférést átadunk neked.'],
      },
    ],
    faq: [
      { q: 'Mi a minimális tech stack egy új ügynökségnek?', a: 'Domain, céges e-mail SPF/DKIM/DMARC beállítással, egyszerű weboldal űrlappal, CRM és egy mód a fizetés fogadására. A hírlevél, az adatbázis és a teljes analitika akkor jön, amikor már folyamatosan érkeznek az ügyfelek.' },
      { q: 'Indulhat egy ügynökség CRM nélkül?', a: 'Az első 5–10 ügyfél elfér egy táblázatban, de ne várj sokáig: minél később költözteted az előzményeket, annál több vész el belőlük.' },
      { q: 'Mennyi ideig tart a stack beállítása?', a: 'A minimális stack — domain, e-mail, weboldal űrlappal és CRM — általában egy-két hét. A teljes készlet fizetéssel, hírlevéllel és adatbázissal két-négy hét.' },
    ],
  },

  'tech-stack-for-business': {
    title: 'Tech stack vállalkozásnak: milyen eszközök kellenek egy kis- és középvállalkozásnak',
    seoTitle: 'Tech stack kisvállalkozásnak — mit válassz | Sikra',
    desc: 'Tech stack vállalkozásnak: weboldal, domain, céges e-mail, CRM, adatbázis, hírlevél, űrlapok és online fizetés. Kész készlet kis- és középvállalkozásoknak.',
    lead: 'Egy vállalkozás tech stackje több, mint egy weboldal. Olyan összekötött szolgáltatásrendszer, amelyen keresztül az ügyfél megtalál, ajánlatot kér, fizet és visszatér. Megmutatjuk, miből áll, és hogyan ne fizess túl.',
    sections: [
      {
        h: 'Az alap tech stack egy vállalkozásnak',
        list: [
          'Weboldal saját domainen, SSL-lel és gyors tárhellyel.',
          'Céges e-mail a cég domainjén, helyes SPF, DKIM és DMARC rekordokkal.',
          'CRM a kérésekhez, ügyfelekhez és ismételt vásárlásokhoz.',
          'Adatbázis vagy háttérrendszer a rendelésekhez, termékekhez és előzményekhez.',
          'A CRM-mel és az e-maillel összekötött űrlapok a weboldalon.',
          'Online fizetés, számlázás és nyugták.',
          'Hírlevélszolgáltatás értesítésekhez, akciókhoz és visszacsábításhoz.',
          'Analitika: Google Analytics 4 és Google Search Console.',
        ],
      },
      {
        h: 'Szolgáltató vállalkozás vagy kereskedelem',
        p: [
          'Szolgáltató vállalkozásnál — szalon, stúdió, klinika, ügyvédi vagy könyvelőiroda — az online időpontfoglalás, a CRM és az ügyfélemlékeztetők a legfontosabbak.',
          'Kereskedelemben és webáruházaknál a katalógus, a készlet és a fizetés az első: webshop, termék- és rendelésadatbázis, fizetési kapu, szállítási integráció és rendelésállapot-értesítők.',
        ],
      },
      {
        h: 'Hogyan válassz eszközöket túlfizetés nélkül',
        list: [
          'A feladatokból indulj ki, ne a márkákból: rajzold fel az ügyfél útját az első érintéstől a fizetésig.',
          'Válassz nyílt API-val és kész integrációkkal rendelkező eszközöket.',
          'Nézd meg, hol tárolják az adatokat, és exportálhatók-e váltáskor.',
          'Indulj a legkisebb csomaggal, és bővíts, amikor eléred a korlátokat.',
          'Minden fiókot a cég nevére regisztrálj, a jelszavakat jelszókezelőben tárold.',
        ],
      },
      {
        h: 'Jelek, hogy ideje újraépíteni a stacket',
        list: [
          'A kérések öt különböző helyre érkeznek, és egy részük elvész.',
          'A munkatársak kézzel másolják az adatokat táblázatok, CRM és könyvelés között.',
          'Az ügyfeleknek küldött levelek spambe kerülnek.',
          'Senki sem tudja, melyik csatornából jöttek a legjobb ügyfelek.',
          'A domainhez vagy a weboldalhoz csak egy korábbi alvállalkozónak van hozzáférése.',
        ],
      },
      {
        h: 'Hogyan segít a Sikra',
        p: ['Átvilágítjuk a jelenlegi eszközeidet, javaslatot teszünk a cél-stackre, átköltöztetjük az adatokat, beállítjuk a weboldalt, az e-mailt, a CRM-et, az adatbázist, az űrlapokat, a fizetést és a hírleveleket, és egy rendszerré kötjük össze őket. Minden fiók a tiéd marad.'],
      },
    ],
    faq: [
      { q: 'Mi tartozik egy kisvállalkozás tech stackjébe?', a: 'Weboldal és domain, céges e-mail, CRM, ajánlatkérő űrlapok, online fizetés, hírlevél és analitika. Kereskedelemnél ehhez jön a katalógus és a rendeléskezelés, szolgáltatásnál az online foglalás.' },
      { q: 'Kell egy kisvállalkozásnak saját fejlesztő?', a: 'Általában nem. A modern stack kész szolgáltatásokból áll, amelyek kód nélkül beállíthatók. Fejlesztésre egyedi logikához vagy összetett integrációkhoz van szükség.' },
      { q: 'Átköltözhet egy vállalkozás új stackre leállás nélkül?', a: 'Igen. Az adatokat átköltöztetjük, a DNS-t egy egyeztetett időablakban állítjuk át, a régi eszközöket csak ellenőrzés után kapcsoljuk ki.' },
    ],
  },

  'start-an-agency': {
    title: 'Ügynökség indítása: lépésről lépésre a digitális indulásig',
    seoTitle: 'Ügynökség indítása a nulláról — lépésről lépésre | Sikra',
    desc: 'Ügynökség indítása a nulláról: rés és szolgáltatások, név és domain, weboldal referenciákkal, céges e-mail, CRM, szerződések, fizetés és az első ügyfelek.',
    lead: 'Egy ügynökség — marketing-, kreatív, digitális, toborzó vagy tanácsadó — indítása nem a logóval kezdődik, hanem egy világos szolgáltatással és egy rendszerrel, amelybe az ügyfelek érkeznek. Ezt a tervet használjuk, amikor ügynökségek indításában segítünk.',
    sections: [
      {
        h: '1. lépés: rés, szolgáltatások és csomagolás',
        p: ['Döntsd el, kinek dolgozol és milyen problémát oldasz meg. Fogalmazz meg 2–4 szolgáltatást világos eredménnyel, határidővel és kezdőárral. A szűk fókusz könnyebben eladható, mint a „marketing mindenkinek”.'],
      },
      {
        h: '2. lépés: név, domain és cégforma',
        p: ['Ellenőrizd, hogy a név szabad domainként és a közösségi oldalakon. A domaint a cég nevére regisztráld, ne egy munkatárséra. Közben alapítsd meg a vállalkozást (egyéni vállalkozás vagy Kft.), és nyiss üzleti bankszámlát — a fizetések fogadásához szükség lesz rá.'],
      },
      {
        h: '3. lépés: az ügynökség digitális alapja',
        list: [
          'Céges e-mail a domainen SPF, DKIM és DMARC beállítással.',
          'Weboldal: szolgáltatások, referenciák, csapat, ajánlatkérő űrlap és hívásfoglalás.',
          'CRM tölcsérrel: kérés → brief → ajánlat → szerződés → fizetés → teljesítés.',
          'Brief-, ajánlat- és szerződéssablonok.',
          'Online fizetés és számlázás.',
          'Google Analytics 4 és Search Console a weboldalon.',
        ],
      },
      {
        h: '4. lépés: csapatfolyamatok és eszközök',
        p: ['Döntsd el, hol követi a csapat a feladatokat és tárolja a fájlokat, hogyan kapja meg az ügyfél a riportokat, és ki felel az egyes szakaszokért. Még egy kétfős ügynökségnél is megéri leírni a folyamatot.'],
      },
      {
        h: '5. lépés: az első ügyfelek',
        list: [
          'Készíts 2–3 referenciamunkát — akár kedvezményes feltételekkel — és tedd ki őket a weboldalra.',
          'Járd végig a kapcsolati hálódat, és kérj ajánlásokat.',
          'Indíts egy egyszerű hírlevelet vagy tartalomcsatornát a meleg közönségnek.',
          'Állíts be ismételt értékesítési emlékeztetőket a CRM-ben.',
        ],
      },
      {
        h: 'Mennyi ideig tart egy ügynökség indítása',
        p: ['A digitális indulás — domain, e-mail, weboldal, CRM, űrlapok és fizetés — kész szolgáltatásokkal és szövegekkel két-négy hét. A cégalapítás és az első ügyfelek keresése ezzel párhuzamosan zajlik.'],
      },
    ],
    faq: [
      { q: 'Hol kezdjem az ügynökség indítását?', a: 'Egy rés és 2–4 világos szolgáltatás kiválasztásával. Utána jön a domain, a céges e-mail, a weboldal referenciákkal és a CRM, hogy egyetlen kérés se vesszen el.' },
      { q: 'Kell weboldal egy ügynökségnek, ha ajánlásból jönnek az ügyfelek?', a: 'Igen. Az ajánlott ügyfél szinte mindig megnézi a weboldalt a hívás előtt. A referenciákat bemutató oldal növeli a bizalmat és a megkötött üzletek arányát.' },
      { q: 'Rábízhatom az ügynökség teljes digitális indítását egy partnerre?', a: 'Igen, pontosan ezzel foglalkozik a Sikra: beállítjuk a domaint, az e-mailt, a weboldalt, a CRM-et, az adatbázisokat, az űrlapokat, a fizetést és a hírleveleket, és minden hozzáférést átadunk.' },
    ],
  },

  'start-a-business': {
    title: 'Vállalkozás indítása: mi kell az online induláshoz',
    seoTitle: 'Vállalkozás indítása a nulláról — ellenőrzőlista | Sikra',
    desc: 'Vállalkozás indítása a nulláról: ötlet és keresletvizsgálat, cégalapítás, domain, weboldal, céges e-mail, CRM, online fizetés, hírlevél és analitika. Gyakorlati lista.',
    lead: 'Egy vállalkozás indítása ma szinte mindig digitális részt is jelent: még egy offline kávézó vagy műhely is a weboldalon, a térképeken és az üzenetküldőkön keresztül kap ügyfeleket. Ez a lista segít, hogy semmi ne maradjon ki.',
    sections: [
      {
        h: 'Teszteld az ötletet a nagy költések előtt',
        p: ['Írd le az ügyfelet, a problémáját és azt, mennyit hajlandó fizetni. Készíts egy egyszerű oldalt az ajánlattal és egy űrlappal, és küldj rá egy kis hirdetési forgalmat. A beérkező kérések és fizetések a kereslet legjobb bizonyítékai.'],
      },
      {
        h: 'Cégalapítás és pénzügyek',
        list: [
          'Válassz vállalkozási formát, és jegyeztesd be a céget vagy az egyéni vállalkozást.',
          'Nyiss üzleti bankszámlát netbankkal.',
          'Döntsd el, hogyan számlázol és állítasz ki nyugtát.',
          'Az első naptól válaszd szét a magán- és az üzleti pénzt.',
        ],
      },
      {
        h: 'A vállalkozás digitális alapja',
        list: [
          'Domain — rövid, kötőjel nélkül, a cég nevére regisztrálva.',
          'Weboldal világos ajánlattal, kezdőárakkal, véleményekkel és űrlappal.',
          'Céges e-mail személyes Gmail helyett — az ügyfelek jobban bíznak a domaines címben.',
          'CRM vagy legalább egy közös ügyfél- és kérésadatbázis.',
          'Online fizetés automatikus nyugtával.',
          'Google Cégprofil, ha van üzleted, vagy egy adott városban dolgozol.',
          'Analitika: Google Analytics 4 és Search Console.',
        ],
      },
      {
        h: 'Ügyfélszerzés és -megtartás',
        p: ['Indíts egy-két csatornát, és hozd ki belőlük az eredményt: SEO és tartalom, keresési hirdetések, közösségi média, partnerségek. Minden kérés kerüljön a CRM-be. Gyűjts hozzájárulást a hírlevélhez, és hozd vissza az ügyfeleket e-mailekkel.'],
      },
      {
        h: 'Gyakori hibák a vállalkozás indításakor',
        list: [
          'Hónapokig építeni a „tökéletes” weboldalt a kereslet tesztelése helyett.',
          'A domaint és a fiókokat alvállalkozó nevére regisztrálni.',
          'Nem számolni az egységgazdaságtannal.',
          'Egyszerre minden csatornán jelen lenni.',
        ],
      },
    ],
    faq: [
      { q: 'Mi kell egy online vállalkozás indításához?', a: 'Bejegyzett cég és bankszámla, domain, weboldal, céges e-mail, CRM, online fizetés és analitika — utána egy-két ügyfélszerző csatorna.' },
      { q: 'Mennyibe kerül egy vállalkozás digitális indítása?', a: 'A terjedelemtől függ: egy egyszerű weboldal e-maillel és űrlappal jóval olcsóbb, mint egy webshop fizetéssel és integrációkkal. Egy rövid brief után megadjuk a munkák körét és a határidőt.' },
      { q: 'Indítható vállalkozás weboldal nélkül?', a: 'Indulhatsz közösségi médiában vagy piactéren, de a saját domainen futó weboldal a te eszközöd: keresési forgalmat gyűjt, és nem függ más platform szabályaitól.' },
    ],
  },

  'business-email-and-domain': {
    title: 'Céges e-mail és domain: hogyan állítsd be helyesen',
    seoTitle: 'Céges e-mail saját domainen — beállítási útmutató | Sikra',
    desc: 'Céges e-mail beállítása a cég domainjén: szolgáltatóválasztás, MX, SPF, DKIM és DMARC, hogy a levelek ne kerüljenek spambe. Útmutató vállalkozásoknak és ügynökségeknek.',
    lead: 'A nev@ceg cím az első, amit az ügyfél a weboldal után lát. Fontosabbak azonban a mögötte álló DNS-rekordok: nélkülük a legitim levelek is spambe kerülnek.',
    sections: [
      {
        h: 'Domain választása',
        list: [
          'Rövid, telefonon könnyen lebetűzhető, kötőjel és számok nélkül.',
          'Olyan végződéssel, amelyben az ügyfeleid megbíznak: .hu, .com vagy iparági végződés.',
          'A cég nevére regisztrálva, automatikus megújítással.',
          'A DNS megbízható szolgáltatónál, például a Cloudflare-nél.',
        ],
      },
      {
        h: 'E-mail-szolgáltató választása',
        p: ['A leggyakoribb lehetőségek a Google Workspace, a Microsoft 365 és a Zoho Mail. Felületben, irodai alkalmazásokban és felhasználónkénti árban különböznek. Egy kis csapatnak az a fontos, hogy minden fiók, az olyan aliasok, mint az info@ és a sales@, és a közös naptárak egy helyen legyenek.'],
      },
      {
        h: 'DNS-rekordok: MX, SPF, DKIM, DMARC',
        list: [
          'MX — megadja, melyik szerver fogadja a domain leveleit.',
          'SPF — felsorolja, mely szerverek küldhetnek levelet a domain nevében.',
          'DKIM — kriptográfiai aláírás, amely igazolja, hogy a levelet nem módosították.',
          'DMARC — szabály az ellenőrzésen elbukó levelekre, és jelentések a hamisítási kísérletekről.',
        ],
        p: ['2024 óta a Gmail és a Yahoo megköveteli az SPF-et, a DKIM-et és a DMARC-ot a tömeges küldőktől. Ezek nélkül a kézzel írt levelek kézbesíthetősége is érezhetően rosszabb.'],
      },
      {
        h: 'Hírlevelek és tranzakciós levelek',
        p: ['A hírlevélszolgáltatást és a weboldal értesítéseit (visszaigazolások, nyugták) is fel kell venni az SPF-be és DKIM-mel aláírni. A tömeges kampányokat gyakran külön aldomainről küldik, hogy a kampányproblémák ne rontsák a napi levelezést.'],
      },
    ],
    faq: [
      { q: 'Miért kerülnek spambe a céges leveleim?', a: 'Leggyakrabban hiányzik vagy hibás az SPF, a DKIM és a DMARC, vagy a domain új, és még nincs hírneve. A DNS-rekordok ellenőrzése és javítása általában megoldja.' },
      { q: 'Átköltöztethető az e-mail másik szolgáltatóhoz levélvesztés nélkül?', a: 'Igen. A leveleket migrációs eszközökkel másoljuk át, az MX-rekordokat pedig a végén állítjuk át, így új levél sem vész el.' },
      { q: 'Hány postafiók kell egy kis cégnek?', a: 'Munkatársanként egy személyes fiók, plusz ingyenes aliasok, például info@, sales@ és support@, a megfelelő emberekhez továbbítva.' },
    ],
  },

  'crm-for-small-business': {
    title: 'CRM kisvállalkozásnak és ügynökségnek: hogyan válassz és vezesd be',
    seoTitle: 'CRM kisvállalkozásnak és ügynökségnek — választás és bevezetés | Sikra',
    desc: 'Hogyan válassz CRM-et kisvállalkozásnak vagy ügynökségnek: HubSpot, Pipedrive, Kommo, Bitrix24 és mások. Tölcsér, weboldal- és e-mail-integráció, fájdalommentes bevezetés.',
    lead: 'A CRM az a hely, ahol minden ügyfél, kérés és megállapodás él. Nélküle az értékesítés az emberek memóriáján múlik. Megmutatjuk, hogyan válassz CRM-et, és hogyan vezesd be úgy, hogy a csapat tényleg használja.',
    sections: [
      {
        h: 'Mit kell tudnia egy CRM-nek',
        list: [
          'Ügyfél- és cégadatlapok levelek, hívások és üzletek előzményeivel.',
          'Értékesítési tölcsér a folyamatodhoz igazított szakaszokkal.',
          'Feladatok és emlékeztetők, hogy egy ügyfél se maradjon válasz nélkül.',
          'Kérések fogadása a weboldalról, e-mailből és üzenetküldőkből.',
          'Riportok: hány kérés, milyen konverzió, mennyi bevétel van folyamatban.',
          'API és integrációk e-maillel, naptárral, fizetéssel és hírlevéllel.',
        ],
      },
      {
        h: 'Népszerű CRM-ek kisvállalkozásoknak',
        list: [
          'HubSpot — könnyű kezdés ingyenes csomaggal, erős marketingmodullal.',
          'Pipedrive — egyszerű, átlátható tölcsér értékesítőcsapatoknak.',
          'Kommo (korábban amoCRM) — erős az üzenetküldő-integrációkban.',
          'Bitrix24 — CRM feladatkezeléssel, csevegéssel és belső portállal.',
          'Airtable vagy Supabase-adatbázis — ha a folyamatod egyedi adatmodellt igényel.',
        ],
      },
      {
        h: 'CRM bevezetése a csapat ellenállása nélkül',
        list: [
          'Írd le egy oldalon az értékesítési folyamatot, mielőtt bármit beállítasz.',
          'Csak a szükséges mezőket tartsd meg.',
          'Kösd be a weboldal űrlapjait és az e-mailt, hogy a kérések maguktól érkezzenek.',
          'Importáld a meglévő ügyfeleket és a nyitott üzleteket.',
          'Tarts rövid oktatást, és jelölj ki felelőst.',
        ],
      },
      {
        h: 'CRM ügynökségeknek',
        p: ['Az értékesítésen túl egy ügynökségnek a projekteket és a megújításokat is látnia kell: brief, ajánlat, szerződés, folyamatban, megújítás. Hasznos a CRM-et a számlázással és a feladatkezelővel összekötni, hogy a kifizetett üzletből automatikusan projekt legyen.'],
      },
    ],
    faq: [
      { q: 'Melyik CRM-et válassza egy kisvállalkozás?', a: 'Egyszerű értékesítőcsapatnak a Pipedrive vagy a HubSpot, sok üzenetküldős kommunikációhoz a Kommo, ha feladatkezelés és belső chat is kell, a Bitrix24. A végső döntés a folyamattól és az integrációktól függ.' },
      { q: 'Mennyi ideig tart egy CRM bevezetése?', a: 'Az alapbeállítás tölcsérrel, weboldal-űrlapokkal és ügyfélimporttal általában néhány naptól két hétig tart.' },
      { q: 'Összeköthető a CRM a weboldallal és a fizetéssel?', a: 'Igen. A weboldal űrlapjairól érkező kérések automatikusan a CRM-be kerülnek, a fizetési állapotok pedig integráción vagy API-n keresztül érkeznek a fizetési szolgáltatótól.' },
    ],
  },
};
