using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Cors;
using System.Web.Http.Description;
using creativo_API.Models;

namespace creativo_API.Controllers
{
    [EnableCors(origins: "*", headers: "*", methods: "*")]
    public class Delivery_PersonController : ApiController
    {
        private creativoDBEntity db = new creativoDBEntity();

        // GET: api/Delivery_Person
        public IQueryable<Delivery_Person> GetDelivery_Persons()
        {
            return db.Delivery_Persons;
        }

        // GET: api/Delivery_Person/5
        [ResponseType(typeof(Delivery_Person))]
        public IHttpActionResult GetDelivery_Person(int id)
        {
            Delivery_Person delivery_Person = db.Delivery_Persons.Find(id);
            if (delivery_Person == null)
            {
                return NotFound();
            }

            return Ok(delivery_Person);
        }

        // PUT: api/Delivery_Person/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutDelivery_Person(int id, Delivery_Person delivery_Person)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != delivery_Person.IdDeliveryPerson)
            {
                return BadRequest();
            }

            db.Entry(delivery_Person).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Delivery_PersonExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return StatusCode(HttpStatusCode.NoContent);
        }

        // POST: api/Delivery_Person
        [ResponseType(typeof(Delivery_Person))]
        public IHttpActionResult PostDelivery_Person(Delivery_Person delivery_Person)
        {

            if (AnyAttributeEmpty(delivery_Person))
            {
                return BadRequest("Hay espacios en blanco");
            }

            if (Delivery_PersonExists(delivery_Person.IdDeliveryPerson))
            {
                return BadRequest("Número de cédula en uso");
            }

            if (UserExists(delivery_Person.Username))
            {
                return BadRequest("Nombre de Usuario en uso");
            }


            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Delivery_Persons.Add(delivery_Person);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (Delivery_PersonExists(delivery_Person.IdDeliveryPerson))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = delivery_Person.IdDeliveryPerson }, delivery_Person);
        }

        // DELETE: api/Delivery_Person/5
        [ResponseType(typeof(Delivery_Person))]
        public IHttpActionResult DeleteDelivery_Person(int id)
        {
            Delivery_Person delivery_Person = db.Delivery_Persons.Find(id);
            if (delivery_Person == null)
            {
                return NotFound();
            }

            db.Delivery_Persons.Remove(delivery_Person);
            db.SaveChanges();

            return Ok(delivery_Person);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Delivery_PersonExists(int id)
        {
            return db.Admins.Count(e => e.IdAdmin == id) > 0 ||
                db.Clients.Count(e => e.IdClient == id) > 0 ||
                db.Entrepreneurships.Count(e => e.IdEntrepreneurship == id) > 0 ||
                db.Delivery_Persons.Count(e => e.IdDeliveryPerson == id) > 0;
        }

        private bool UserExists(string user)
        {
            return db.Admins.Count(e => e.Username == user) > 0 ||
               db.Clients.Count(e => e.Username == user) > 0 ||
               db.Entrepreneurships.Count(e => e.Username == user) > 0 ||
               db.Delivery_Persons.Count(e => e.Username == user) > 0;

        }
        private bool AnyAttributeEmpty(Delivery_Person deliveryPerson)
        {
            // Verificar cada propiedad del objeto DeliveryPerson
            // Devolver true si alguna propiedad es una cadena vacía, de lo contrario, devolver false
            return string.IsNullOrEmpty(deliveryPerson.Username) ||
                   string.IsNullOrEmpty(deliveryPerson.Password) ||
                   string.IsNullOrEmpty(deliveryPerson.Firstname) ||
                   string.IsNullOrEmpty(deliveryPerson.Lastname) ||
                   string.IsNullOrEmpty(deliveryPerson.State) ||
                   string.IsNullOrEmpty(deliveryPerson.Province) ||
                   string.IsNullOrEmpty(deliveryPerson.Canton) ||
                   string.IsNullOrEmpty(deliveryPerson.District) ||
                   string.IsNullOrEmpty(deliveryPerson.Phone);
        }

    }
}