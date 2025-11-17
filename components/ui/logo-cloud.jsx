import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import NvidiaLogo from "@/public/assets/bug/gogle.webp";
import SupabaseLogo from "@/public/assets/bug/micro.webp";
import GithubLogo from "@/public/assets/bug/sym.webp";
import OpenAILogo from "@/public/assets/bug/sony.webp";
import TursoLogo from "@/public/assets/bug/dyson.webp";
import ClerkLogo from "@/public/assets/bug/ebay.webp";
import ClaudeLogo from "@/public/assets/bug/ever.webp";
import VercelLogo from "@/public/assets/bug/mixmax.webp";

export const FallingImages = ({
  className = "",
  images = [],
  trigger = "auto",
  gravity = 0.5,
  imageSize = 60,
  bounceAmount = 0.7,
}) => {
  const containerRef = useRef(null);
  const [effectStarted, setEffectStarted] = useState(false);
  const [imageStates, setImageStates] = useState([]);
  const animationFrameRef = useRef(null);
  const imageStatesRef = useRef([]);

  useEffect(() => {
    if (trigger === "auto") {
      setEffectStarted(true);
    }
  }, [trigger]);

  useEffect(() => {
    if (!effectStarted || !containerRef.current) return;

    const containerRect = containerRef.current.getBoundingClientRect();
    const width = containerRect.width;
    const height = containerRect.height;

    const cols = Math.ceil(Math.sqrt(images.length));
    const initialStates = images.map((img, index) => {
      const col = index % cols;
      const row = Math.floor(index / cols);
      const spacingX = width / (cols + 1);
      const spacingY = 100;

      return {
        id: index,
        x: spacingX * (col + 1),
        y: spacingY * (row + 1),
        vx: (Math.random() - 0.5) * 5,
        vy: 0,
        rotation: 0,
        rotationSpeed: (Math.random() - 0.5) * 0.05,
        grabbed: false,
      };
    });

    imageStatesRef.current = initialStates;
    setImageStates(initialStates);

    const animate = () => {
      const containerRect = containerRef.current?.getBoundingClientRect();
      if (!containerRect) return;

      const width = containerRect.width;
      const height = containerRect.height;

      imageStatesRef.current = imageStatesRef.current.map((state) => {
        if (state.grabbed) return state;

        let { x, y, vx, vy, rotation, rotationSpeed } = state;

        vy += gravity;
        x += vx;
        y += vy;
        rotation += rotationSpeed;

        vx *= 0.99;
        vy *= 0.99;

        const halfSize = imageSize / 2;

        if (y + halfSize >= height) {
          y = height - halfSize;
          vy = -vy * bounceAmount;
          rotationSpeed *= 0.9;
        }

        if (x - halfSize <= 0) {
          x = halfSize;
          vx = -vx * bounceAmount;
        }

        if (x + halfSize >= width) {
          x = width - halfSize;
          vx = -vx * bounceAmount;
        }

        return { ...state, x, y, vx, vy, rotation, rotationSpeed };
      });

      setImageStates([...imageStatesRef.current]);
      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [effectStarted, images, gravity, imageSize, bounceAmount]);

  const handleMouseDown = (index, e) => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const state = imageStatesRef.current[index];
    const startStateX = state.x;
    const startStateY = state.y;

    imageStatesRef.current[index] = { ...state, grabbed: true, vx: 0, vy: 0 };

    const handleMouseMove = (e) => {
      const dx = e.clientX - startX;
      const dy = e.clientY - startY;
      imageStatesRef.current[index] = {
        ...imageStatesRef.current[index],
        x: startStateX + dx,
        y: startStateY + dy,
      };
      setImageStates([...imageStatesRef.current]);
    };

    const handleMouseUp = (e) => {
      const state = imageStatesRef.current[index];
      imageStatesRef.current[index] = {
        ...state,
        grabbed: false,
        vx: (e.clientX - startX) * 0.2,
        vy: (e.clientY - startY) * 0.2,
      };
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  };

  const handleTrigger = () => {
    if (!effectStarted && (trigger === "click" || trigger === "hover")) {
      setEffectStarted(true);
    }
  };

  return (
    <div
      ref={containerRef}
      className={`falling-images-container ${className}`}
      onClick={trigger === "click" ? handleTrigger : undefined}
      onMouseEnter={trigger === "hover" ? handleTrigger : undefined}
      style={{
        position: "relative",
        overflow: "hidden",
        width: "100%",
        height: "100%",
        minHeight: "400px",
      }}
    >
      {!effectStarted &&
        images.map((img, index) => {
          const cols = Math.ceil(Math.sqrt(images.length));
          const col = index % cols;
          const row = Math.floor(index / cols);
          const containerRect = containerRef.current?.getBoundingClientRect();
          const width = containerRect?.width || 800;
          const spacingX = width / (cols + 1);
          const spacingY = 100;

          return (
            <div
              key={`static-${index}`}
              style={{
                position: "absolute",
                left: `${spacingX * (col + 1)}px`,
                top: `${spacingY * (row + 1)}px`,
                width: `${imageSize}px`,
                height: `${imageSize}px`,
                transform: "translate(-50%, -50%)",
                cursor: "pointer",
              }}
            >
              <Image
                src={img}
                alt={`Logo ${index + 1}`}
                width={imageSize}
                height={imageSize}
                priority // ensures immediate loading
                draggable="false"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "contain",
                }}
              />
            </div>
          );
        })}
      {effectStarted &&
        imageStates.map((state, index) => (
          <div
            key={state.id}
            onMouseDown={(e) => handleMouseDown(index, e)}
            style={{
              position: "absolute",
              left: `${state.x}px`,
              top: `${state.y}px`,
              width: `${imageSize}px`,
              height: `${imageSize}px`,
              transform: `translate(-50%, -50%) rotate(${state.rotation}rad)`,
              cursor: state.grabbed ? "grabbing" : "grab",
              userSelect: "none",
              transition: state.grabbed ? "none" : undefined,
            }}
          >
            <Image
              src={images[index]}
              alt={`Logo ${index + 1}`}
              width={imageSize}
              height={imageSize}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              draggable="false"
            />
          </div>
        ))}
    </div>
  );
};

// Demo usage with imported logos
export default function App() {
  const logos = [
    NvidiaLogo,
    SupabaseLogo,
    GithubLogo,
    OpenAILogo,
    TursoLogo,
    ClerkLogo,
    ClaudeLogo,
    VercelLogo,
  ];

  return (
    <div
      style={{
        width: "100%",
        height: "600px",
        background: "#0a0a0a",
        padding: "20px",
      }}
    >
      <h2 style={{ color: "white", marginBottom: "20px" }}>Hover to start!</h2>
      <FallingImages
        images={logos}
        trigger="hover"
        gravity={0.56}
        imageSize={60}
        bounceAmount={0.7}
      />
    </div>
  );
}
