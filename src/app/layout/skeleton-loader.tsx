import ContentLoader from "react-content-loader";

export function SkeletonLoader({ count = 6 }) {
  return (
    <>
      {Array(count)
        .fill(null)
        .map((_, index) => (
          <div className="" key={index}>
            <ContentLoader
              speed={2}
              viewBox="0 0 420 600"
              backgroundColor="#f3f3f3"
              foregroundColor="#ecebeb"
              className="min-w-36 w-full h-fit"
            >
              <rect x="0" y="0" width="100%" height="70%" />
              <rect x="24" y="calc(70% + 30px)" width="80%" height="30px" />
              <rect x="24" y="calc(70% + 100px)" width="40%" height="25px" />
            </ContentLoader>
          </div>
        ))}
    </>
  );
}
