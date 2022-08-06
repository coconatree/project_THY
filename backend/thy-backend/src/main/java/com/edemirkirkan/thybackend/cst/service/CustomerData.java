package com.edemirkirkan.thybackend.cst.service;


import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class CustomerData {
    public final Boolean[] isReturnFlight = new Boolean[]{true, false};

    public final List<Pair<String, String>> depCityCode = new ArrayList<>(List.of(
            Pair.of("Istanul", "TR"),
            Pair.of("San Francisco", "US"),
            Pair.of("Amsterdam", "NL"),
            Pair.of("Madrid", "ES"),
            Pair.of("Roma", "IT"),
            Pair.of("Beijing", "CN"),
            Pair.of("Moscow", "RU"),
            Pair.of("Dallas", "US"),
            Pair.of("Sao Paulo", "BR"),
            Pair.of("Toronto", "CA")
    ));

    public final List<Pair<String, String>> arrCityCode = new ArrayList<>(List.of(
            Pair.of("London", "GB"),
            Pair.of("Paris", "FR"),
            Pair.of("Barcelona", "ES"),
            Pair.of("New York", "US"),
            Pair.of("Berlin", "DE")
    ));

    public final List<Pair<String, String>> name = new ArrayList<>(List.of(
            Pair.of("Mr.", "Atahan"), Pair.of("Mr.", "Çağan"), Pair.of("Mr.", "Çağrı"),
            Pair.of("Ms.", "Selen"), Pair.of("Ms.", "Zeynep"), Pair.of("Ms.", "Deniz"),
            Pair.of("Mr.", "Eren"), Pair.of("Mr.", "Göktuğ"), Pair.of("Mr.", "Ibrahim"),
            Pair.of("Ms.", "Yağmur"), Pair.of("Ms.", "Irem"), Pair.of("Ms.", "Ceren"),
            Pair.of("Mr.", "Olcay"), Pair.of("Mr.", "Tan"), Pair.of("Mr.", "Teoman"),
            Pair.of("Ms.", "Gizem"), Pair.of("Ms.", "Merve"), Pair.of("Ms.", "Ceyda"),
            Pair.of("Mr.", "Ulaş"), Pair.of("Mr.", "Hamza"), Pair.of("Mr.", "Mehmet"),
            Pair.of("Ms.", "Lara"), Pair.of("Ms.", "Yaren"), Pair.of("Ms.", "Nisa"),
            Pair.of("Mr.", "Muhammed"), Pair.of("Mr.", "Ahmet"), Pair.of("Mr.", "Aykan"),
            Pair.of("Ms.", "Ayça"), Pair.of("Ms.", "Bengisu"), Pair.of("Ms.", "Rukiye"),
            Pair.of("Mr.", "Emre"), Pair.of("Mr.", "Berk"), Pair.of("Mr.", "Doruk"),
            Pair.of("Ms.", "Nehir"), Pair.of("Ms.", "Ela"), Pair.of("Ms.", "Ece"),
            Pair.of("Mr.", "Kerim"), Pair.of("Mr.", "Arda"), Pair.of("Mr.", "Kerem"),
            Pair.of("Ms.", "Ceylin"), Pair.of("Ms.", "Ayse"), Pair.of("Ms.", "Fatma"),
            Pair.of("Mr.", "Berkay"), Pair.of("Mr.", "Eray"), Pair.of("Mr.", "Orhan"),
            Pair.of("Ms.", "Figen"), Pair.of("Ms.", "Handan"), Pair.of("Ms.", "Eda"),
            Pair.of("Mr.", "Kenan"), Pair.of("Mr.", "Kemal"), Pair.of("Mr.", "Adnan"),
            Pair.of("Ms.", "Büşra"), Pair.of("Ms.", "Kübra"), Pair.of("Ms.", "Elif"),
            Pair.of("Mr.", "Hulki"), Pair.of("Mr.", "Taylan"), Pair.of("Mr.", "Turgut"),
            Pair.of("Ms.", "Selin"), Pair.of("Ms.", "Begüm"), Pair.of("Ms.", "Defne"),
            Pair.of("Mr.", "Umut"), Pair.of("Mr.", "Yağız"), Pair.of("Mr.", "Ali"),
            Pair.of("Ms.", "İpek"), Pair.of("Ms.", "Pınar"), Pair.of("Ms.", "Cansın"),
            Pair.of("Mr.", "Çağatay"), Pair.of("Mr.", "Serkan"), Pair.of("Mr.", "Burak"),
            Pair.of("Ms.", "Selda"), Pair.of("Ms.", "Beril"), Pair.of("Ms.", "Buket"),
            Pair.of("Mr.", "Burhan"), Pair.of("Mr.", "Tuğran"), Pair.of("Mr.", "Bilal"),
            Pair.of("Ms.", "Asena"), Pair.of("Ms.", "Pelin"), Pair.of("Ms.", "Derya")
    ));

    public final String[] lastName = new String[]{
            "KANDEMİR", "ŞEN", "Aykol", "Yılmaz",
            "ÇEVİK", "ERKURAN", "TÜTEN", "ÖZTÜRK",
            "YÜZBAŞIOĞLU", "VURAL", "YÜCEL", "SÖNMEZ",
            "ERTEKİN", "DEDE", "UYANIK", "ASLAN",
            "AKBULUT", "ORHON", "UZ", "YAVUZ",
            "ERDEM", "KULAÇ", "KAYA", "SELVİ",
            "AKPINAR", "ABACIOĞLU", "ÇAY", "IŞIK",
            "ÖZER", "ÖZDEMİR", "ÖZTÜRK", "TAHTACI",
            "BÜYÜKCAM", "KULAKSIZ", "AKSEL", "EROĞLU",
            "KARAKUM", "DAL", "ÖCAL", "AYHAN",
            "YİĞİT", "YARBİL", "CANACANKATAN", "GÜMÜŞAY",
            "MURT", "HALHALLI", "ULUÖZ", "ŞEYHANLI",
            "ÇALIŞKANTÜRK", "YILMAZ", "SARAÇOĞLU", "SEZER"};
}
