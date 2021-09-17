using System.Collections.Generic;

namespace Day.Office.Api.Dtos
{
    public class GraphEventsResponse
    {
        public List<Value> Value { get; set; }        
    }
    public class Value
    {
        public string Id { get; set; }
        public Start Start { get; set; }
        public End End { get; set; }
        public Location Location { get; set; }
    }
}
