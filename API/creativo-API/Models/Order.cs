//------------------------------------------------------------------------------
// <auto-generated>
//     Este código se generó a partir de una plantilla.
//
//     Los cambios manuales en este archivo pueden causar un comportamiento inesperado de la aplicación.
//     Los cambios manuales en este archivo se sobrescribirán si se regenera el código.
// </auto-generated>
//------------------------------------------------------------------------------

namespace creativo_API.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class Order
    {
        public int IdOrder { get; set; }
        public string Address { get; set; }
        public string State { get; set; }
        public Nullable<int> IdDeliveryPerson { get; set; }
        public Nullable<int> IdClient { get; set; }
    
        public virtual Client Client { get; set; }
        public virtual Delivery_Person Delivery_Person { get; set; }
    }
}
