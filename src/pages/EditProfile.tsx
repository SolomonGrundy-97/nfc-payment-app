import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import MRIcon from "../assets/icons/Avatar.png";
import BackIcon from "../assets/icons/back_icon.png";

interface ProfileFormInputs {
  email: string;
  firstName: string;
  lastName: string;
  country: string;
  phoneNumber: string;
  address: string;
  postalCode: string;
  state: string;
  city: string;
  DOB: string;
}

const EditProfileForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProfileFormInputs>(); //replace this with the actual backend types variable....
  const [loading, setLoading] = useState(false);

  const onSubmit: SubmitHandler<ProfileFormInputs> = async (data) => {
    setLoading(true);
    try {
      const response = await fetch("https://your-backend-api.com/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!response.ok) throw new Error("Failed to update profile");
      alert("Profile updated successfully!"); // i can use react toaster here for the alert...
    } catch (error) {
      console.error(error);
      alert("An error occurred while updating profile"); // i can use react toaster here too for the alert...
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-nfcThickBlack text-white p-6">
      <div className="w-full max-w-lg bg-nfcThickBlack p-6">
        <h6 className="text-center text-2xl font-semibold mb-16">Profile</h6>

        <Link to="/accountprofile">
          <img src={BackIcon} alt="user profile icon" className="" />
        </Link>
        {/* Profile Picture */}
        <div className="flex justify-center mb-4">
          <div className="rounded-full flex items-center">
            <img src={MRIcon} alt="user profile icon" className="w-20 h-20 " />
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label htmlFor="email">Email</label>
            <input
              {...register("email", { required: "email is required" })}
              type="email"
              placeholder="user@email.com"
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              id="email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p> //wrong input error message...
            )}
          </div>
          <br />

          <div className="">
            <label htmlFor="firstname">First name</label>
            <input
              {...register("firstName", { required: "first name is required" })}
              type="text"
              placeholder="Mike"
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              id="firstname"
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm">{errors.firstName.message}</p>
            )}
          </div>
          <br />

          <div className="">
            <label htmlFor="lastname">Last name</label>
            <input
              {...register("lastName", { required: "last name is required" })}
              type="text"
              placeholder="Rose"
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              id="lastname"
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm">{errors.lastName.message}</p>
            )}
          </div>
          <br />

          <div>
            <label htmlFor="country">Country</label>
            <select
              {...register("country", { required: "select your country" })}
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              id="country"
            >
              <option value="" className="text-xs">
                country
              </option>
              <option value="Nigeria" className="text-xs">
                Nigeria
              </option>
              <option value="USA" className="text-xs">
                USA
              </option>
              <option value="UK" className="text-xs">
                UK
              </option>
            </select>
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>
          <br />

          <div>
            <label htmlFor="phone">Phone Nunber</label>
            <input
              {...register("phoneNumber", {
                required: "phone number is required",
              })}
              type="text"
              placeholder="123456789"
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              id="phone"
            />
            {errors.phoneNumber && (
              <p className="text-red-500 text-sm">
                {errors.phoneNumber.message}
              </p>
            )}
          </div>
          <br />

          <div>
            <label htmlFor="residentialaddress">Residential Address</label>
            <input
              {...register("address", { required: "input address" })}
              type="text"
              placeholder="residential address"
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              id="residentialaddress"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>
          <br />

          <div>
            <label htmlFor="postalcode">Postal Code</label>
            <input
              {...register("postalCode", {
                required: "postal code is required",
              })}
              type="text"
              placeholder="postal code"
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              id="postalcode"
            />
            {errors.postalCode && (
              <p className="text-red-500 text-sm">
                {errors.postalCode.message}
              </p>
            )}
          </div>
          <br />

          <div className="">
            <label htmlFor="state">State</label>
            <input
              {...register("state", { required: "input your state" })}
              type="text"
              placeholder="state"
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              id="state"
            />
            {errors.state && (
              <p className="text-red-500 text-sm">{errors.state.message}</p>
            )}
          </div>
          <br />

          <div className="">
            <label htmlFor="city">City</label>
            <input
              {...register("city", { required: "input your city" })}
              type="text"
              placeholder="city"
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              id="city"
            />
            {errors.city && (
              <p className="text-red-500 text-sm">{errors.city.message}</p>
            )}
          </div>
          <br />

          <div>
            <label htmlFor="dob">Date of Birth</label>
            <input
              {...register("DOB", { required: "select DOB" })}
              type="date"
              className="w-full px-4 py-3 mt-3 bg-nfcLightBlack text-nfcWhite rounded-2xl"
              id="dob"
            />
            {errors.DOB && (
              <p className="text-red-500 text-sm">{errors.DOB.message}</p>
            )}
          </div>

          <br />
          <br />
          <div className="">
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-nfcBlue hover:bg-blue-600 text-nfcWhite py-1 rounded-full transition font-semibold flex items-center justify-center"
            >
              {loading ? "Saving..." : "Save changes"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProfileForm;
