import BlogDetailsHero from "@/components/blog-details/BlogDetailsHero";
import BlogDetailsContent from "@/components/blog-details/BlogDetailsContent";
import ContactSidebar from "@/components/blog-details/ContactSidebar";
import RelatedBlogs from "@/components/blog-details/RelatedBlogs";

export default function BlogDetails() {
  return (
    <main>
      <section className="section-container">
        <BlogDetailsHero />
        <div className="flex flex-col lg:flex-row gap-[60px]">
          <div className="flex-1 min-w-0">
            <BlogDetailsContent />
          </div>
          <ContactSidebar />
        </div>
      </section>

      <RelatedBlogs />
    </main>
  );
}