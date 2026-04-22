import Button from "@/components/Button";

export default function NotFound() {
  return (
    <main className="section-padding">
      <div className="content-wrapper flex flex-col gap-[24px]">
        <span className="label-text">404</span>
        <h1 className="h1">Page not found.</h1>
        <p className="body-text">This page doesn't exist or was moved.</p>
        <Button href="/" variant="filled">
          Back to Home
        </Button>
      </div>
    </main>
  );
}
