
  import { Component, Prop, h } from '@stencil/core';

  @Component({
  tag: 'c-tz8loest3z',
  shadow: true,
})
export class Ctz8loest3z {
    @Prop() first: string;
    @Prop() second: string;
    private foo(): string {
      return 'aaa'+this.first+this.second;
    }
    render(){
        return <div>{ this.foo() } </div>;
    }
}
  