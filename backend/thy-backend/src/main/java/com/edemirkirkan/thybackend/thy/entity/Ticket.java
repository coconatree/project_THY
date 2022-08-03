package com.edemirkirkan.thybackend.thy.entity;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

import javax.persistence.*;

@Entity
@Table
@Getter
@Setter
@ToString
public class Ticket {
    // CUST_KEY"|"CITY_NM"|"CNTRY_NM"|"ORGN_AP"|"DSTN_AP"|"ORG_CITY_NM"|"ORG_CNTRY_NM"|"DOM_INTNL_FLAG"|"JRNY_TYP"|"TOP1_ORG_MKT_REGN"|"TOP1_ORG_CTY"|"PRIM_TKT_NUM"
    // 5238184| "ANKARA"|"TURKEY"|"BLZ"|        "ESB"|"Blantyre"|"Malawi"|"I"|"O"|"Domestic"|"ANKARA"|4899264811

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String customerKey;
    private String originatingAirport;
    private String destinationAirport;
    private String originatingCity;
    private String destinationCity;
}
