"use client";
import React from "react";
import Image from "next/image";

export default function Showcase() {
  return (
    <div className="container mx-auto p-10 space-y-10">
      <h1 className="text-5xl font-bold text-center">daisyUI Showcase</h1>

      {/* Buttons Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Buttons</h2>
        <div className="flex gap-4">
          <button className="btn btn-primary">Primary</button>
          <button className="btn btn-secondary">Secondary</button>
          <button className="btn btn-accent">Accent</button>
          <button className="btn btn-outline">Outline</button>
        </div>
      </section>

      {/* Card Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Cards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Using Unsplash */}
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <Image
                src="/img_0716.jpeg" // Image should be placed in public/images
                alt="Architecture"
                width={400}
                height={225}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card 1</h2>
              <p>
                This is an example of a daisyUI card component using Unsplash.
              </p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary">Learn More</button>
              </div>
            </div>
          </div>

          {/* Card 2: Using Picsum */}
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <Image
                src="https://picsum.photos/400/225"
                alt="Nature"
                width={400}
                height={225}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card 2</h2>
              <p>This card uses an image from Picsum.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-secondary">Explore</button>
              </div>
            </div>
          </div>

          {/* Card 3: Using Local Image */}
          <div className="card w-full bg-base-100 shadow-xl">
            <figure>
              <Image
                src="/itbroke.jpeg" // Image should be placed in public/images
                alt="Technology"
                width={400}
                height={225}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">Card 3</h2>
              <p>This card uses a local image for reliability.</p>
              <div className="card-actions justify-end">
                <button className="btn btn-accent">Discover</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Forms</h2>
        <div className="flex flex-col gap-4 max-w-md mx-auto">
          <input
            type="text"
            placeholder="Type your name"
            className="input input-bordered input-primary w-full"
          />
          <input
            type="email"
            placeholder="Email address"
            className="input input-bordered input-secondary w-full"
          />
          <textarea
            className="textarea textarea-accent w-full"
            placeholder="Your message"
          ></textarea>
          <button className="btn btn-primary">Submit</button>
        </div>
      </section>

      {/* Modal Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Modal</h2>
        <label htmlFor="my-modal" className="btn btn-secondary">
          Open Modal
        </label>

        <input type="checkbox" id="my-modal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Modal Title</h3>
            <Image
              src={"/plan.jpeg"}
              alt="failed but have a plan"
              width={400}
              height={225}
            />
            <label htmlFor="my-modal" className="btn">
              Close
            </label>
          </div>
        </div>
      </section>

      {/* Alert Section */}
      <section className="space-y-4">
        <h2 className="text-3xl font-semibold">Alerts</h2>
        <div className="alert alert-info">
          <span>Info Alert: This is an informative alert.</span>
        </div>
        <div className="alert alert-success">
          <span>Success Alert: Operation was successful!</span>
        </div>
        <div className="alert alert-warning">
          <span>Warning Alert: Be careful with this operation!</span>
        </div>
        <div className="alert alert-error">
          <span>Error Alert: Something went wrong!</span>
        </div>
      </section>
    </div>
  );
}
