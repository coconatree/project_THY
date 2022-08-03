package com.edemirkirkan.thybackend.thy.dto;

import lombok.Data;

@Data
public class ThyBoardingPassRestDto {

    /**
     {
     "status": "SUCCESS",
     "requestId": "00000174f85b9d25-6444308b",
     "message":
     {
     "code": "TK-0000",
     "description": "Request Processed Successfully."
     },
     "data":
     {
     "TripData":
     {
     "OriginDestinationList":
     {
     "OriginDestination":
     {
     "IsReturnFlight": false,
     "Segment":
     {
     "MarketingAirlineCode": "TK",
     "AdditionalInformation":
     {
     "IsMobileBoardingPassSignEnabled": false,
     "IsAnadoluJetFlight": false,
     "IsHomePrintedBagTagEnabled": false,
     "IsApisFlight": true
     },
     "isSegmentInterline": false,
     "ArrivalInformation":
     {
     "ArrivalDate": "2017-12-20",
     "LocationCode": "ADF",
     "CountryCode": "TR",
     "ArrivalTime": "08:15"
     },
     "CabinClassCode": "Y",
     "FlightNumber": "2216",
     "DepartureInformation":
     {
     "DepartureTime": "06:30",
     "DepartureDay": "WE",
     "LocationCode": "IST",
     "DepartureDate": "2017-12-20",
     "CountryCode": "TR"
     },
     "RPH": "1"
     }
     }
     },
     "PassengerInfoList":
     {
     "PassengerInfo":
     {
     "CreditCardControlRequired": false,
     "TravelingWithInfant": false,
     "PassengerName":
     {
     "NamePrefix": "",
     "GivenName": "",
     "Surname": ""
     },
     "AdultRPH": "0",
     "Gender": "F",
     "RPH": "1",
     "PassengerTypeCode": "ADT"
     }
     },
     "PassengerFlightInfoList":
     {
     "PassengerFlightInfo":
     {
     "PaxIdentifier":
     {
     "DCS_PassengerRefNumber": "005"
     },
     "IdInformation":
     {
     "TCKIdNumber": "20380163294"
     },
     "PassengerRPH": "1",
     "CheckinReference":
     {
     "BoardingInfo":
     {
     "State": "NOT_BOARDED"
     },
     "BoardingPassInfo":
     {
     "State": "NOT_PRINTED"
     },
     "CheckinStateInfo":
     {
     "State": "NOT_CHECKEDIN"
     }
     },
     "FlightRPH": "1",
     "API_Info":
     {
     "CountryOfResidence": "",
     "IsCompleted": false,
     "PassportNo": "",
     "IsRequiredBeforeCheckin": false,
     "Birthday": "1952-03-03",
     "Gender": "F",
     "DateOfDocExpiration": "",
     "Surname": "AKYIGIT",
     "DocType": "P",
     "Nationality": "",
     "Name": "EMINE"
     },
     "BoardingPassPrintableStatus": [
     {
     "reasonCodes": "NotCheckedIn",
     "isPrintable": false,
     "source": "WEB"
     },

     {
     "reasonCodes": "NotCheckedIn",
     "isPrintable": false,
     "source": "MOBILE"
     }
     ],
     "BookingInfo":
     {
     "Status": "S",
     "HasChargeableSeat": false,
     "Ticket":
     {
     "TicketNumber": "2352330653835",
     "CouponNumber": "C1",
     "TicketStatus": "CONFIRMED",
     "TicketType": "ETK"
     },
     "Type": "COMMERCIAL",
     "IsGroupPnr": false,
     "ResBookDesigCode": "P",
     "FareBase":
     {
     "FareBase": "P",
     "BaggageAllowance": "15K"
     },
     "HasChargeableExitSeat": false
     }
     }
     },
     "PnrCode": "SWL3GJ8"
     }
     }
     }
     * */
}
