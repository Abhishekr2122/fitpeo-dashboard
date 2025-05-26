import { genralOptions } from "../constants";
import { toolsOptions } from "../constants";
import { others } from "../constants";

export default function SideBar() {
  return (
    <div>
      <h1>
        <span style={{ color: "#5ed4d8" }}>Health</span>
        <span style={{ color: "#4d4f6d" }}>care.</span>
      </h1>
      <div>
        <div>
          <ul>
            {genralOptions.map(function (citem, i) {
              return (
                <li key={i}>
                  <div>{citem.icon}</div>
                  <p>{citem.text}</p>
                </li>
              );
            })}
          </ul>
          <ul>
            {toolsOptions.map(function (citem, i) {
              return (
                <li key={i}>
                  <div>{citem.icon}</div>
                  <p>{citem.text}</p>
                </li>
              );
            })}
          </ul>
        </div>
        <ul>
          {others.map(function (citem, i) {
            return (
              <li key={i}>
                <div>
                  {citem.icon}
                  <p>{citem.text}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
