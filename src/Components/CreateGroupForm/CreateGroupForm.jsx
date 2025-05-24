import React, { useState } from "react";
import Swal from "sweetalert2";

const CreateGroupForm = ({ user }) => {
  const [formData, setFormData] = useState({
    groupName: "",
    category: "",
    description: "",
    location: "",
    maxMembers: "",
    startDate: "",
    imageUrl: "",
    userName: user?.displayName || "",
    userEmail: user?.email || "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // 👈 Just logs formData
    alert('ok done')
    Swal.fire({
      title: "Congratulations!",
      icon: "success",
      draggable: true,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className=" max-w-xl mx-auto p-6 bg-white shadow-md rounded-lg space-y-4"
    >
      <h2 className="text-3xl text-primary font-semibold mb-4 text-center">
        Create New Group
      </h2>

      <input
        type="text"
        name="groupName"
        placeholder="Group Name"
        value={formData.groupName}
        onChange={handleChange}
        className="input input-bordered focus:border-primary focus:outline-primary w-full "
        required
      />

      <select
        name="category"
        value={formData.category}
        onChange={handleChange}
        className="select select-bordered w-full focus:border-primary focus:outline-primary"
        required
      >
        <option value="" disabled>
          Select Hobby Category
        </option>
        <option value="Drawing & Painting">Drawing & Painting</option>
        <option value="Photography">Photography</option>
        <option value="Cooking">Cooking</option>
        <option value="Reading">Reading</option>
        <option value="Writing">Writing</option>
        <option value="Video Gaming">Video Gaming</option>
        <option value="Hiking">Hiking</option>
        <option value="Hiking">Coding</option>
      </select>

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
        className="textarea textarea-bordered w-full focus:border-primary focus:outline-primary"
        rows="4"
        required
      />

      <input
        type="text"
        name="location"
        placeholder="Meeting Location"
        value={formData.location}
        onChange={handleChange}
        className="input input-bordered w-full focus:border-primary focus:outline-primary"
        required
      />

      <input
        type="number"
        name="maxMembers"
        placeholder="Max Members"
        value={formData.maxMembers}
        onChange={handleChange}
        className="input input-bordered w-full focus:border-primary focus:outline-primary"
        required
      />

      <input
        type="date"
        name="startDate"
        value={formData.startDate}
        onChange={handleChange}
        className="input input-bordered w-full focus:border-primary focus:outline-primary"
        required
      />

      <input
        type="url"
        name="imageUrl"
        placeholder="Image URL"
        value={formData.imageUrl}
        onChange={handleChange}
        className="input input-bordered w-full focus:border-primary focus:outline-primary"
        required
      />

      <input
        type="text"
        name="userName"
        value={formData.userName}
        readOnly
        className="input input-bordered w-full bg-gray-100 focus:border-primary focus:outline-primary"
      />

      <input
        type="email"
        name="userEmail"
        value={formData.userEmail}
        readOnly
        className="input input-bordered w-full bg-gray-100 focus:border-primary focus:outline-primary"
      />

      <button
        type="submit"
        className="btn btn-primary w-full bg-[#FF6B35] hover:bg-[#e35c27]"
      >
        Create Group
      </button>
    </form>
  );
};

export default CreateGroupForm;
