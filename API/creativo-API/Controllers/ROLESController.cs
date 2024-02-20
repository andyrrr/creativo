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
    public class ROLESController : ApiController
    {
        private creativoDBEntities db = new creativoDBEntities();

        // GET: api/ROLES
        public IQueryable<ROL> GetROLES()
        {
            return db.ROLES;
        }

        // GET: api/ROLES/5
        [ResponseType(typeof(ROL))]
        public IHttpActionResult GetROL(string id)
        {
            ROL rol = db.ROLES.Find(id);
            if (rol == null)
            {
                return NotFound();
            }

            return Ok(rol);
        }

        // GET: api/ROL/Usuario/Pass
        [ResponseType(typeof(ROL))]
        [Route("api/ROL/{usuario}/{pass}")]
        public IHttpActionResult GetROL(string usuario, string pass)
        {
           
            if (string.IsNullOrEmpty(usuario) || string.IsNullOrEmpty(pass))
            {
                return BadRequest("Usuario y contraseña son requeridos");
            }

            ROL rol = db.ROLES.FirstOrDefault(r => r.Usuario == usuario);

            if (rol == null)
            {
                return BadRequest("Usuario no encontrado requeridos");
            }


            if (db.ADMINS.FirstOrDefault(obj => obj.Usuario == usuario && obj.Pass == pass) != null)
            {
                return Ok(rol);

            };

            if (db.EMPRENDIMIENTOS.FirstOrDefault(obj => obj.Usuario == usuario && obj.Pass == pass) != null)
            {
                return Ok(rol);

            };

            return BadRequest("Contraseña Incorrecta");
        }


        // PUT: api/ROLES/5
        [ResponseType(typeof(void))]
        public IHttpActionResult PutROL(string id, ROL rol)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            if (id != rol.Usuario)
            {
                return BadRequest();
            }

            db.Entry(rol).State = EntityState.Modified;

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ROLExists(id))
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

        // POST: api/ROLES
        [ResponseType(typeof(ROL))]
        public IHttpActionResult PostROL(ROL rol)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(ModelState);
            }

            db.ROLES.Add(rol);

            try
            {
                db.SaveChanges();
            }
            catch (DbUpdateException)
            {
                if (ROLExists(rol.Usuario))
                {
                    return Conflict();
                }
                else
                {
                    throw;
                }
            }

            return CreatedAtRoute("DefaultApi", new { id = rol.Usuario }, rol);
        }

        // DELETE: api/ROLES/5
        [ResponseType(typeof(ROL))]
        public IHttpActionResult DeleteROL(string id)
        {
            ROL rol = db.ROLES.Find(id);
            if (rol == null)
            {
                return NotFound();
            }

            db.ROLES.Remove(rol);
            db.SaveChanges();

            return Ok(rol);
        }

        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }

        private bool ROLExists(string id)
        {
            return db.ROLES.Count(e => e.Usuario == id) > 0;
        }
    }
}