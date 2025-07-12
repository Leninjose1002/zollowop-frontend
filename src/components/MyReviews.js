import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import { useAuth } from "./AuthContext";
import { submitReview, fetchMyReviews } from "../api"; // Adjust the path if needed
import axiosInstance from "../api/axiosInstance";

const MyReviews = () => {
  const { token } = useAuth();

  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  // Add Review
  const [showAddForm, setShowAddForm] = useState(false);
  const [newService, setNewService] = useState("");
  const [newReviewText, setNewReviewText] = useState("");
  const [newRating, setNewRating] = useState(0);

  // Edit Review
  const [editingId, setEditingId] = useState(null);
  const [editService, setEditService] = useState("");
  const [editReviewText, setEditReviewText] = useState("");
  const [editRating, setEditRating] = useState(0);

  useEffect(() => {
    const loadReviews = async () => {
      try {
        const res = await fetchMyReviews(token);
        setReviews(res);
      } catch (err) {
        console.error("Error fetching reviews:", err);
      } finally {
        setLoading(false);
      }
    };
    loadReviews();
  }, [token]);

  const handleAddReview = async () => {
    try {
      const res = await submitReview(
        {
          serviceName: newService,
    rating: newRating,
    review: newReviewText,
        },
        token
      );
      setReviews((prev) => [res.review, ...prev]);
      setShowAddForm(false);
      setNewService("");
      setNewReviewText("");
      setNewRating(0);
    } catch (err) {
      console.error("Submit failed:", err);
    }
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this review?")) return;
    try {
      await axiosInstance.delete(`/reviews/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      setReviews((prev) => prev.filter((r) => r._id !== id));
    } catch (err) {
      console.error("Delete failed:", err);
    }
  };

  const startEditing = (review) => {
    setEditingId(review._id);
    setEditService(review.service || "");
    setEditReviewText(review.review);
    setEditRating(review.rating);
  };

  const handleEditSubmit = async () => {
    try {
      const res = await axiosInstance.put(
        `/reviews/${editingId}`,
        {
          service: editService,
          review: editReviewText,
          rating: editRating,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setReviews((prev) =>
        prev.map((r) => (r._id === editingId ? { ...r, ...res.review } : r))
      );
      setEditingId(null);
    } catch (err) {
      console.error("Edit failed:", err);
    }
  };

  return (
    <div className="bg-white p-6 rounded shadow-md">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">My Reviews</h2>
        <button
          onClick={() => setShowAddForm((prev) => !prev)}
          className="bg-blue-600 text-white px-4 py-1.5 rounded text-sm hover:bg-blue-700"
        >
          {showAddForm ? "Cancel" : "➕ Add Review"}
        </button>
      </div>

      {/* Add Form */}
      {showAddForm && (
        <div className="mb-6 border p-4 rounded bg-blue-50">
          <input
            className="w-full border p-2 rounded mb-2"
            placeholder="Service Name"
            value={newService}
            onChange={(e) => setNewService(e.target.value)}
          />
          <div className="flex space-x-1 mb-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <FaStar
                key={star}
                className={`cursor-pointer text-2xl ${
                  star <= newRating ? "text-yellow-400" : "text-gray-300"
                }`}
                onClick={() => setNewRating(star)}
              />
            ))}
          </div>
          <textarea
            className="w-full border p-2 rounded mb-2"
            placeholder="Write your review..."
            value={newReviewText}
            onChange={(e) => setNewReviewText(e.target.value)}
          />
          <button
            onClick={handleAddReview}
            className="bg-green-600 text-white px-4 py-1.5 rounded text-sm"
          >
            Submit Review
          </button>
        </div>
      )}

      {/* Reviews */}
      {loading ? (
        <p>Loading reviews...</p>
      ) : reviews.length === 0 ? (
        <p>No reviews found.</p>
      ) : (
        <ul className="space-y-6">
          {reviews.map((review) => (
            <li key={review._id} className="border-b pb-4">
              <div className="flex justify-between items-center mb-1">
                <h3 className="font-semibold text-gray-800">
                  {review.service || "Unnamed Service"}
                </h3>
                <p className="text-sm text-gray-500">
                  {new Date(review.createdAt).toLocaleString()}
                </p>
              </div>

              {editingId === review._id ? (
                <>
                  <input
                    className="w-full border p-2 rounded mb-2"
                    value={editService}
                    onChange={(e) => setEditService(e.target.value)}
                  />
                  <div className="flex space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`cursor-pointer text-2xl ${
                          star <= editRating ? "text-yellow-400" : "text-gray-300"
                        }`}
                        onClick={() => setEditRating(star)}
                      />
                    ))}
                  </div>
                  <textarea
                    className="w-full border p-2 rounded mb-2"
                    value={editReviewText}
                    onChange={(e) => setEditReviewText(e.target.value)}
                  />
                  <div className="flex gap-2">
                    <button
                      onClick={handleEditSubmit}
                      className="bg-blue-600 text-white px-4 py-1 rounded"
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingId(null)}
                      className="border px-4 py-1 rounded"
                    >
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  <div className="flex items-center space-x-1 mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <FaStar
                        key={star}
                        className={`${
                          star <= review.rating ? "text-yellow-400" : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-2">{review.review}</p>
                  <div className="flex gap-3 text-sm">
                    <button
                      onClick={() => startEditing(review)}
                      className="text-blue-600 hover:underline"
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => handleDelete(review._id)}
                      className="text-red-500 hover:underline"
                    >
                      Delete
                    </button>
                  </div>
                </>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MyReviews;
