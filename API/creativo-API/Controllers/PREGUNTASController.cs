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
    public class PREGUNTASController : ApiController
    {
        private creativoDBEntities db = new creativoDBEntities();

        // GET: api/PREGUNTAS
        public IQueryable<PREGUNTA> GetPREGUNTAS()
        {
            return db.PREGUNTAS;
        }

        // GET: api/PREGUNTAS/5
        [ResponseType(typeof(PREGUNTA))]
        public IHttpActionResult GetPREGUNTA(int id)
        {
            PREGUNTA pregunta = db.PREGUNTAS.Find(id);
            if (pregunta == null)
            {
                return NotFound();
            }

            return Ok(pregunta);
        }

        // PUT: api/PREGUNTAS/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutPREGUNTA(int id, PREGUNTA pregunta)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != pregunta.IdPreguntas)
            {
                return BadRequest();
            }

            db.Entry(pregunta).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!PREGUNTAExists(id))
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

        // POST: api/PREGUNTAS
        [ResponseType(typeof(PREGUNTA))]
        public IHttpActionResult PostPREGUNTA(PREGUNTA pregunta)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.PREGUNTAS.Add(pregunta);
            db.SaveChanges();

            return CreatedAtRoute("DefaultApi", new { id = pregunta.IdPreguntas }, pregunta);
        }

        // DELETE: api/PREGUNTAS/5
        [ResponseType(typeof(PREGUNTA))]
        public IHttpActionResult DeletePREGUNTA(int id)
        {
            PREGUNTA pregunta = db.PREGUNTAS.Find(id);
            if (pregunta == null)
            {
                return NotFound();
            }

            db.PREGUNTAS.Remove(pregunta);
            db.SaveChanges();

            return Ok(pregunta);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool PREGUNTAExists(int id)
        {
            return db.PREGUNTAS.Count(e => e.IdPreguntas == id) > 0;
        }
    }
}