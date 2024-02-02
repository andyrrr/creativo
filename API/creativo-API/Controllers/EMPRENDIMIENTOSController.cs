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
    public class EMPRENDIMIENTOSController : ApiController
    {
        private creativoDBEntities db = new creativoDBEntities();

        // GET: api/EMPRENDIMIENTOS
        public IQueryable<EMPRENDIMIENTO> GetEMPRENDIMIENTOS()
        {
            return db.EMPRENDIMIENTOS;
        }

        // GET: api/EMPRENDIMIENTOS/5
        [ResponseType(typeof(EMPRENDIMIENTO))]
        public IHttpActionResult GetEMPRENDIMIENTO(int id)
        {
            EMPRENDIMIENTO emprendimiento = db.EMPRENDIMIENTOS.Find(id);
            if (emprendimiento == null)
            {
                return NotFound();
            }

            return Ok(emprendimiento);
        }

        // PUT: api/EMPRENDIMIENTOS/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutEMPRENDIMIENTO(int id, EMPRENDIMIENTO emprendimiento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != emprendimiento.IdEmprendimiento)
            {
                return BadRequest();
            }

            db.Entry(emprendimiento).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!EMPRENDIMIENTOExists(id))
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

        // POST: api/EMPRENDIMIENTOS
        [ResponseType(typeof(EMPRENDIMIENTO))]
        public IHttpActionResult PostEMPRENDIMIENTO(EMPRENDIMIENTO emprendimiento)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.EMPRENDIMIENTOS.Add(emprendimiento);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (EMPRENDIMIENTOExists(emprendimiento.IdEmprendimiento))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = emprendimiento.IdEmprendimiento }, emprendimiento);
        }

        // DELETE: api/EMPRENDIMIENTOS/5
        [ResponseType(typeof(EMPRENDIMIENTO))]
        public IHttpActionResult DeleteEMPRENDIMIENTO(int id)
        {
            EMPRENDIMIENTO emprendimiento = db.EMPRENDIMIENTOS.Find(id);
            if (emprendimiento == null)
            {
                return NotFound();
            }

            db.EMPRENDIMIENTOS.Remove(emprendimiento);
            db.SaveChanges();

            return Ok(emprendimiento);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool EMPRENDIMIENTOExists(int id)
        {
            return db.EMPRENDIMIENTOS.Count(e => e.IdEmprendimiento == id) > 0;
        }
    }
}