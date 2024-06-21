import { Building2Icon, ThumbsUpIcon, Users2Icon } from "lucide-react";

export default function Vision() {
  return (
    <>
      {/* Icon Blocks */}
      <div className="container py-24 lg:py-32">
        <div className="mx-auto max-w-2xl">
          {/* Grid */}
          <div className="grid gap-12">
            <div>
              <h2 className="text-3xl font-bold lg:text-4xl">Our vision</h2>
              <p className="mt-3 text-muted-foreground">
                For as long as there have been cities, the public square has
                been a fundamental part of the urban landscape - an open,
                approachable space to meet and engage with friends and
                neighbours. Space aims to capture this spirit of bringing people
                together in an exciting, welcoming environment.
              </p>
            </div>
            <div className="space-y-6 lg:space-y-10">
              {/* Icon Block */}
              <div className="flex">
                <Building2Icon className="mt-2 h-6 w-6 flex-shrink-0" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base font-semibold sm:text-lg">
                    High quality Co-Living spaces
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our fully furnished spaces are designed and purpose-built
                    with Co-Living in mind, featuring high-end finishes and
                    amenities that go far beyond traditional apartment
                    buildings.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <Users2Icon className="mt-2 h-6 w-6 flex-shrink-0" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base font-semibold sm:text-lg">
                    Fostering vibrant communities
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    Our passion is bringing people together. Beyond creating
                    beautiful spaces, we provide shared experiences.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
              {/* Icon Block */}
              <div className="flex">
                <ThumbsUpIcon className="mt-2 h-6 w-6 flex-shrink-0" />
                <div className="ms-5 sm:ms-8">
                  <h3 className="text-base font-semibold sm:text-lg">
                    Simple and all-inclusive
                  </h3>
                  <p className="mt-1 text-muted-foreground">
                    We worry about the details so that our residents don&apos;t
                    have to. From our online application process to simple,
                    all-inclusive billing we aim to make the living experience
                    as effortless as possible.
                  </p>
                </div>
              </div>
              {/* End Icon Block */}
            </div>
          </div>
          {/* End Grid */}
        </div>
      </div>
      {/* End Icon Blocks */}
    </>
  );
}
