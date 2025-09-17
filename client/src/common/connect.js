const backendDomin = process.env.Backend_Url || "http://localhost:5000"; 

const SummaryApi = {
  Register: {
    url: `${backendDomin}/api/auth/register`,  // Fixed template string formatting
    method: "POST",  // Corrected method to a string "POST"
  },
  Login: {
    url: `${backendDomin}/api/auth/login`,  // Fixed template string formatting
    method: "POST",  // Corrected method to a string "POST"
  },
  CreateEvent: {
    url: `${backendDomin}/api/organizer/create-event`,  // Fixed template string formatting
    method: "POST",  // Corrected method to a string "POST"
  },
  Addclub: {
    url: `${backendDomin}/api/organizer/add-club`,  // Fixed template string formatting
    method: "POST",  // Corrected method to a string "POST"
  },
  VeiwEvent :{
    url: `${backendDomin}/api/organizer/my-events`,  // Fixed template string formatting
    method: "GET",  // Corrected method to a string "GET"
  },
  ViewUser :{
    url: `${backendDomin}/api/admin/users`,  // Fixed template string formatting
    method: "Get",  // Corrected method to a string 
  },
  ViewOrganizer :{
    url: `${backendDomin}/api/admin/organizers`,  // Fixed template string formatting
    method: "Get",  // Corrected method to a string
  },
  ManagaOrganizer :{
    url: `${backendDomin}/api/admin/approve-organizer/:id`,  // Fixed template string formatting
    method: "Put",
     
  },
  ManagaOrganizer :{
     url: `${backendDomin}/api/admin/delete-organizer/:id`,  // Fixed template string formatting
    method: "Delete",
  },

  ManageUser :{
    url: `${backendDomin}/api/admin/delete-user/:id`,  // Fixed template string formatting
    method: "Delete",  // Corrected method to a string "Delete"
  },
  Dashboard :{
     url: `${backendDomin}/api/student/registered-events`,  // Fixed template string formatting
    method: "get",

  },
  ViewEvent :{
     url: `${backendDomin}/api/student/available-events`,  // Fixed template string formatting
    method: "get",
  }

};

export default SummaryApi;  // Exported the corrected object
