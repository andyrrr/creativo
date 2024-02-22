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
    public class EntrepreneurshipsController : ApiController
    {
        private creativoDBEntity db = new creativoDBEntity();

        // GET: api/Entrepreneurships
        public IQueryable<Entrepreneurship> GetEntrepreneurships()
        {
            return db.Entrepreneurships;
        }


        // GET: api/Entrepreneurships/Solicitudes
        [HttpGet]
        [Route("api/Entrepreneurships/Solicitudes")]
        public IQueryable<Entrepreneurship> GetSolicitudes()
        {
            return db.Entrepreneurships.Where(e => e.State == "Pendiente");
        }

        // GET: api/Entrepreneurships/5
        [ResponseType(typeof(Entrepreneurship))]
        public IHttpActionResult GetEntrepreneurship(int id)
        {
            Entrepreneurship entrepreneurship = db.Entrepreneurships.Find(id);
            if (entrepreneurship == null)
            {
                return NotFound();
            }

            return Ok(entrepreneurship);
        }

        // PUT: api/Entrepreneurships/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEntrepreneurship(int id, Entrepreneurship entrepreneurship)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != entrepreneurship.IdEntrepreneurship)
            {
                return BadRequest();
            }

            db.Entry(entrepreneurship).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EntrepreneurshipExists(id))
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

        // POST: api/Entrepreneurships
        [ResponseType(typeof(Entrepreneurship))]
        public IHttpActionResult PostEntrepreneurship(Entrepreneurship entrepreneurship)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.Entrepreneurships.Add(entrepreneurship);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (EntrepreneurshipExists(entrepreneurship.IdEntrepreneurship))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = entrepreneurship.IdEntrepreneurship }, entrepreneurship);
        }

        // DELETE: api/Entrepreneurships/5
        [ResponseType(typeof(Entrepreneurship))]
        public IHttpActionResult DeleteEntrepreneurship(int id)
        {
            Entrepreneurship entrepreneurship = db.Entrepreneurships.Find(id);
            if (entrepreneurship == null)
            {
                return NotFound();
            }

            db.Entrepreneurships.Remove(entrepreneurship);
            db.SaveChanges();

            return Ok(entrepreneurship);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EntrepreneurshipExists(int id)
        {
            return db.Entrepreneurships.Count(e => e.IdEntrepreneurship == id) > 0;
        }
    }
}