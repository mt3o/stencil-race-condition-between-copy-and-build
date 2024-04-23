
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-odvbf8zr05',
  shadow: true,
})
export class Codvbf8zr05 {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  