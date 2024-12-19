import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { getComments } from "@/sanity/query/section";

export const Comments = async () => {
  const reviews = await getComments();
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">
          CUSTOMER REVIEWS
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card key={review._id}>
              <CardHeader>
                <div className="flex items-center space-x-2">
                  <div className="flex">
                    {Array.from({ length: review.rating || 5 }).map((_, i) => (
                      <svg
                        key={i}
                        className={`w-5 h-5 ${i < (review.rating || 0) ? "text-yellow-400" : "text-gray-300"}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>
                  <span className="text-muted-foreground">
                    {review.user?.firstName + " " + review.user?.lastName}{" "}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{review.comment}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
