using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Data.Entity.Infrastructure;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using System.Web.Http.Description;
using creativo_API.Models;

namespace creativo_API.Controllers
{
    public class ADMINSController : ApiController
    {
        private creativoDBEntities db = new creativoDBEntities();

        // GET: api/ADMINS
        public IQueryable<ADMIN> GetADMINS()
        {
            return db.ADMINS;
        }

        // GET: api/ADMINS/5
        [ResponseType(typeof(ADMIN))]
        public IHttpActionResult GetADMIN(int id)
        {
            ADMIN admin = db.ADMINS.Find(id);
            if (admin == null)
            {
                return NotFound();
            }

            return Ok(admin);
        }

        // PUT: api/ADMINS/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutADMIN(int id, ADMIN admin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != admin.IdAdmin)
            {
                return BadRequest();
            }

            db.Entry(admin).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ADMINExists(id))
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

        // POST: api/ADMINS
        [ResponseType(typeof(ADMIN))]
        public IHttpActionResult PostADMIN(ADMIN admin)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ADMINS.Add(admin);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ADMINExists(admin.IdAdmin))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = admin.IdAdmin }, admin);
        }

        // DELETE: api/ADMINS/5
        [ResponseType(typeof(ADMIN))]
        public IHttpActionResult DeleteADMIN(int id)
        {
            ADMIN admin = db.ADMINS.Find(id);
            if (admin == null)
            {
                return NotFound();
            }

            db.ADMINS.Remove(admin);
            db.SaveChanges();

            return Ok(admin);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ADMINExists(int id)
        {
            return db.ADMINS.Count(e => e.IdAdmin == id) > 0;
        }
    }
}