import { useEffect, useState } from "react";
import { InputText } from "../ui/InputText";
import { PostFoundCard } from "../ui/PostFoundCard";
import Modal from "../ui/Modal";

export const SearchPosts = ({ posts }) => {
  const [value, setValue] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const postsFound = posts.filter((post) => {
    return post.frontmatter.title
      .toLowerCase()
      .includes(value.toLocaleLowerCase());
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);
  return (
    <>
      <button onClick={() => setIsOpen(true)}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="icon icon-tabler icon-tabler-search"
          width="26"
          height="26"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="#c0f25b"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M10 10m-7 0a7 7 0 1 0 14 0a7 7 0 1 0 -14 0" />
          <path d="M21 21l-6 -6" />
        </svg>
      </button>
      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <div className="flex flex-col gap-y-6 h-[450px]">
          <div className="flex">
            <InputText
              value={value}
              onChange={(e) => setValue(e.target.value)}
            />
            <button className="" onClick={() => setIsOpen(false)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="icon icon-tabler icon-tabler-x"
                width="44"
                height="44"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="#ffffff"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M18 6l-12 12" />
                <path d="M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex flex-col gap-y-3 max-h-[400px] overflow-y-auto">
            {postsFound.map((post, index) => {
              return (
                <PostFoundCard
                  key={post.frontmatter.title}
                  description={post.frontmatter.title}
                  title={post.frontmatter.title}
                />
              );
            })}
            {posts.length < 1 && "No se han encontrado posts"}
          </div>
        </div>
      </Modal>
    </>
  );
};
