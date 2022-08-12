import "./crear.css"
import { useContext, useState } from "react";
import axios from "axios";
import { Context } from "../../context/Context";

export default function Crear() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [file, setFile] = useState(null);
  const [cate, setCate] = useState("");
  const { user } = useContext(Context);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newPost = {
      username: user.username,
      title,
      desc,
    };
    if (file) {
      const data =new FormData();
      const filename = Date.now() + file.name;
      data.append("name", filename);
      data.append("file", file);
      newPost.photo = filename;
      try {
        await axios.post("/upload", data);
      } catch (err) {}
    }
    try {
      const res = await axios.post("/posts", newPost);
      window.location.replace("/post/" + res.data._id);
    } catch (err) {}
  };
  return (
    <div className="crear">
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Titulo"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Categoria"
            className="writeInput1"
            autoFocus={true}
            onChange={e=>setCate(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Hablanos de tu viaje"
            type="text"
            className="writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <label htmlFor="fileInput">
            <i className="writeIcon">Seleccionar Imagen</i>
          </label>
      </form>
      {file && (
        <img className="writeImgs" src={URL.createObjectURL(file)} alt="" />
      )}
      <button className="writeSubmit" type="submit">
          Publish
        </button>
    </div>
  );
}