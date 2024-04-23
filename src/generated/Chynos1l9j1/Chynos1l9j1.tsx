
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-hynos1l9j1',
  shadow: true,
})
export class Chynos1l9j1 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  