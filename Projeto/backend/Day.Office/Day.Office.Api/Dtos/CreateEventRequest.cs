using System;

namespace Day.Office.Api.Dtos
{
    public class CreateEventRequest
    {
        public string Subject { get; set; }
        public Body Body { get; set; }
        public Start Start { get; set; }
        public End End { get; set; }        
        public bool AllowNewTimeProposals { get; set; }
        public string ShowAs { get; set; }               
    }
    public class Body
    {
        public Body()
        {
            ContentType = "HTML";
            Content = "Day Office!";
        }
        public string ContentType { get; set; }
        public string Content { get; set; }
    }
    public class Start
    {
        public Start(DateTime dateTime)
        {
            DateTime = dateTime;
            TimeZone = "E. South America Standard Time";
        }
        public DateTime DateTime { get; set; }
        public string TimeZone { get; set; }
    }
    public class End
    {
        public End(DateTime dateTime)
        {
            DateTime = dateTime;
            TimeZone = "E. South America Standard Time";
        }

        public DateTime DateTime { get; set; }
        public string TimeZone { get; set; }
    }
}
