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
    public class Workshop_ClientController : ApiController
    {
        private creativoDBEntity db = new creativoDBEntity();

        // GET: api/Workshop_Client
        public IQueryable<Workshop_Client> GetWorkshop_Client()
        {
            return db.Workshop_Client;
        }

        // GET: api/Workshop_Client/5
        [ResponseType(typeof(Workshop_Client))]
        public IHttpActionResult GetWorkshop_Client(int id)
        {
            Workshop_Client workshop_Client = db.Workshop_Client.Find(id);
            if (workshop_Client == null)
            {
                return NotFound();
            }

            return Ok(workshop_Client);
        }

        // PUT: api/Workshop_Client/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutWorkshop_Client(int id, Workshop_Client workshop_Client)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != workshop_Client.IdWorkshop)
            {
                return BadRequest();
            }

            db.Entry(workshop_Client).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!Workshop_ClientExists(id))
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

        // POST: api/Workshop_Client
        [ResponseType(typeof(Workshop_Client))]
        public IHttpActionResult PostWorkshop_Client(Workshop_Client workshop_Client)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Workshop_Client.Add(workshop_Client);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (Workshop_ClientExists(workshop_Client.IdWorkshop))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = workshop_Client.IdWorkshop }, workshop_Client);
        }

        // DELETE: api/Workshop_Client/5
        [ResponseType(typeof(Workshop_Client))]
        public IHttpActionResult DeleteWorkshop_Client(int id)
        {
            Workshop_Client workshop_Client = db.Workshop_Client.Find(id);
            if (workshop_Client == null)
            {
                return NotFound();
            }

            db.Workshop_Client.Remove(workshop_Client);
            db.SaveChanges();

            return Ok(workshop_Client);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool Workshop_ClientExists(int id)
        {
            return db.Workshop_Client.Count(e => e.IdWorkshop == id) > 0;
        }
    }
}