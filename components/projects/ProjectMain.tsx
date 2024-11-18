"use client";

import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import React from "react";

// Define the structure of your project data (you can adjust based on your schema)
interface Project {
  _id: string;
  title: string;
  mainImage: {
    url: string;
    alt: string;
  };
  description: string;
}

export const ProjectMain = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    const fetchProjects = async () => {
      // Define your query
      const query = `*[_type == "project"]{
        _id,
        title,
        mainImage{
          asset->{
            url
          },
          alt
        },
        description
      }`;

      // Fetch data from Sanity
      const projects = await client.fetch(query);
      setProjects(projects);
    };

    fetchProjects();
  }, []);

  return (
    <div>
      <h1>Projects</h1>
      <ul>
        {projects.map((project) => (
          <li key={project._id}>
            <h2>{project.title}</h2>
            {project.mainImage && (
              <img src={project.mainImage.url} alt={project.mainImage.alt} />
            )}
            <p>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
