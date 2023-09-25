import logo from "../../assets/logo.png";
import auth from "../../assets/auth.jpg";
import { AuthContext } from "../../context/authContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const { signup } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [profilePictureUrl, setProfilePictureUrl] = useState(null);

  const cloudinaryCloudName = "dm66wpmtb";
  const cloudinaryApiKey = "237414245722233";

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    user: {
      name: "",
      email: "",
      username: "",
      password: "",
      profile_picture_url: "",
    },
  });

  function handleSubmit(e) {
    e.preventDefault();
    fetch("http://127.0.0.1:3000/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => {
        if (resp.ok) {
          resp.json().then((data) => {
            console.log(data);
            console.log("Success:", data);
            alert("Report has been saved successfully.");
            navigate("/sign_up");
          });
        } else {
          // Handle errors
          resp.json().then((errorData) => {
            console.error("Error:", errorData); // Log error response
            // Handle errors
          });
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle network errors
      });
  }

  function handleChange(event) {
    const { name, value } = event.target;

    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const formData = new FormData();
      formData.append("file", file); // Use the 'file' object here
      formData.append("upload_preset", "h9stgrub");
      console.log("FormData:", formData);

      // Replace the Cloudinary URL with your own
      fetch("https://api.cloudinary.com/v1_1/dm66wpmtb/image/upload", {
        method: "POST",
        body: formData,
      })
        .then((response) => response.json())
        .then((data) => {
          console.log("Cloudinary Success:", data);
          // Handle the Cloudinary response here
          setProfilePictureUrl(data.secure_url);
        })
        .catch((error) => {
          console.error("Error uploading image to Cloudinary:", error);
          console.error("Cloudinary Error:", error);
        });
    } else {
      // Handle non-file input changes (e.g., text input)
      console.log("Non-file input change:", name, value);
      // Handle non-file input changes (e.g., text input)
      setFormData({
        ...formData,
        user: {
          ...formData.user,
          [name]: value, // Update the specific user attribute (e.g., name, email, etc.)
        },
      });
    }
  }

  return (
    <>
      <div className="flex h-screen">
        <div className="flex flex-1 flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
          <div className="mx-auto w-full font-heading max-w-sm lg:w-96">
            <div>
              <a href="/">
                <img className="h-12 w-auto" src={logo} alt="Simply good" />
              </a>
              <h2 className="mt-6 text-3xl font-bold tracking-tight text-gray-900">
                Sign up for an account
              </h2>
              <p className="mt-2 text-sm text-gray-600">
                Or{" "}
                <a
                  href="/sign_in"
                  className="font-medium text-orange-600 hover:text-orange-500"
                >
                  sign in to your account
                </a>
              </p>
            </div>

            <div className="mt-8">
              <div className="mt-6">
                <form action="#" method="POST" className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm text-orange-500 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm text-orange-500 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                      />
                    </div>
                  </div>{" "}
                  <div>
                    <label
                      htmlFor="username"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Username
                    </label>
                    <div className="mt-1">
                      <input
                        id="username"
                        name="username"
                        type="text"
                        required
                        value={formData.username}
                        onChange={handleChange}
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm text-orange-500 focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                      />
                    </div>
                  </div>{" "}
                  <div className="space-y-1">
                    <label
                      htmlFor="password"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Password
                    </label>
                    <div className="mt-1">
                      <input
                        id="password"
                        name="password"
                        type="password"
                        autoComplete="current-password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 placeholder-gray-400 shadow-sm text-orange-500  focus:border-orange-500 focus:outline-none focus:ring-orange-500 sm:text-sm"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="profile_picture"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Profile Picture
                    </label>
                    <div className="mt-1">
                      <input
                        id="profile"
                        name="profile_picture_url"
                        type="file"
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  {/* <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <input
                        id="remember-me"
                        name="remember-me"
                        type="checkbox"
                        className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                      />
                      <label
                        htmlFor="remember-me"
                        className="ml-2 block text-sm text-gray-900"
                      >
                        Remember me
                      </label>
                    </div>

                    <div className="text-sm">
                      <a
                        href="#"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Forgot your password?
                      </a>
                    </div>
                  </div> */}
                  <div>
                    <button
                      type="submit"
                      className="flex w-full justify-center rounded-md border border-transparent bg-orange-600 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-orange-700 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-offset-2"
                      onClick={handleSubmit}
                    >
                      Sign up
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="relative hidden w-0 flex-1 lg:block">
          <img
            className="absolute inset-0 h-full w-full object-cover"
            src={auth}
            alt="roasting meat on a grill"
          />
        </div>
      </div>
    </>
  );
}
