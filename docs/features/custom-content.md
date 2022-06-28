# Render custom content

You can also render custom content and display almost anything inside the timeline cards.

To render custom content, wrap the custom content in a div and pass it as a child element to the `Chrono` component.

```jsx{4-48}
  <Chrono
    mode="VERTICAL"
  >
    <div>
      <div style={{ width: "250px", height: "250px" }}>
        <img
          style={{ maxWidth: "100%", maxHeight: "100%" }}
          alt="test"
          src="https://cdn.tutsplus.com/net/uploads/2013/08/github-collab-retina-preview.gif"
        />
      </div>
    </div>
    <div>
      <h3>This is a List</h3>
      <ul>
        <li>Item 1</li>
        <li>Item 2</li>
      </ul>
    </div>
    <div>
      <h3>Dunkirk</h3>
      <p>
        The Battle of Dunkirk (French: Bataille de Dunkerque) was fought
        in Dunkirk (Dunkerque), France, during the Second World War,
        between the Allies and Nazi Germany.
      </p>
    </div>
    <div style={{ margin: "1rem" }}>
      <h3>Table</h3>
      <table>
        <thead>
          <tr>
            <td>Column 1</td>
            <td>Column 2</td>
            <td>Column 3</td>
            <td>Column 4</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Value 1</td>
            <td>Value 2</td>
            <td>Value 3</td>
            <td>Value 4</td>
          </tr>
        </tbody>
      </table>
    </div>
  </Chrono>
```

![vertical_custom](../assets/vertical_custom.png)

[![Edit react-chrono-vertical-custom](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/react-chrono-vertical-custom-qepnm?fontsize=14&hidenavigation=1&theme=dark)
